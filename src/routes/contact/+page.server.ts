import type { Actions } from './$types.js';
import { error } from '@sveltejs/kit';

export const load = async () => {
  return {}
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);

    return {success: true}
  }
}