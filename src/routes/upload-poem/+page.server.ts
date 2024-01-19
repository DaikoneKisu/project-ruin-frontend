import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { BACKEND_BASE_URL } from '$env/static/private'
import { schema } from './schema'

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema)

  return {
    form
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema)

    if (!form.valid) {
      return fail(400, { form })
    }

    async function uploadAuthor() {
      const res = await fetch(`${BACKEND_BASE_URL}/authors/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.data.name,
          pseudonim: form.data.pseudonim,
          birthDate: form.data.birthDate,
          deathDate: form.data.deathDate,
          gender: form.data.gender
        })
      })

      return await res.json()
    }

    async function uploadPoem(author: { id: string }) {
      const res = await fetch(`${BACKEND_BASE_URL}/poems/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          authors: [author.id],
          genre: form.data.genre,
          title: form.data.title,
          description: form.data.description,
          subject: form.data.subject,
          originalLanguage: form.data.originalLanguage,
          elaborationStartDate: form.data.elaborationStartDate ?? '',
          elaborationEndDate: form.data.elaborationEndDate ?? '',
          elaborationPlaces:
            form.data.elaborationPlaces?.split(',').map((place) => place.trim()) || [],
          poemText: form.data.poem
        })
      })

      console.log(await res.json())
    }

    const author = await uploadAuthor()
    await uploadPoem(author)

    return {
      form
    }
  }
}
