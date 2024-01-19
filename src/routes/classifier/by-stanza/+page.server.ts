import type { PageServerLoad, Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { classifierByVerseFormSchema } from './schema'

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(classifierByVerseFormSchema)
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
