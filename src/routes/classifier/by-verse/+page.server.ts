import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { classifierByVerseFormSchema } from './schema'
import { BACKEND_BASE_URL } from '$env/static/private'
import type { PoemResponse } from '$lib/types/poem-response.type'

export const load: PageServerLoad = async ({ url }) => {
  const syllables = url.searchParams.get('syllables')

  async function getPoems(): Promise<Array<PoemResponse>> {
    const url = new URL(`${BACKEND_BASE_URL}/poems/`)
    if (syllables != null) url.searchParams.set('verse_length', syllables)

    const poems = await fetch(url)

    return (await poems.json()) as PoemResponse[]
  }

  return {
    form: await superValidate(classifierByVerseFormSchema),
    poems: await getPoems()
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, classifierByVerseFormSchema)

    if (!form.valid) {
      return fail(400, { form })
    }

    return {
      form
    }
  }
}
