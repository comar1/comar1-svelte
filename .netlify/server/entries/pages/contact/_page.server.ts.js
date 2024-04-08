const load = async () => {
  return {};
};
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    return { success: true };
  }
};
export {
  actions,
  load
};
