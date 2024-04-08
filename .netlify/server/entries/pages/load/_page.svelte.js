import { c as create_ssr_component, e as each, a as escape, b as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".main.svelte-1moni23{background-color:rgb(103, 103, 103);width:100%;height:60rem;margin:0;padding:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contacts = [] } = $$props;
  if ($$props.contacts === void 0 && $$bindings.contacts && contacts !== void 0)
    $$bindings.contacts(contacts);
  $$result.css.add(css);
  return `<div class="main w-[5rem] h-[5rem]  svelte-1moni23"><div class="overflow-x-auto w-full mt-6"><table class="table w-full"> <thead data-svelte-h="svelte-1h4f3ag"><tr><th><label><input type="checkbox" class="checkbox"></label></th> <th>Name</th> <th>Job</th> <th>Email</th> <th></th></tr></thead> <tbody>${each(contacts, (contact) => {
    return `<tr><th data-svelte-h="svelte-1oiff2w"><label><input type="checkbox" class="checkbox"> </label></th> <td><div class="flex items-center space-x-3"><div class="avatar"><div class="mask mask-squircle w-12 h-12"><img src="${"https://i.pravatar.cc/150?u=" + escape(contact.name, true)}"${add_attribute("alt", contact.name, 0)}> </div></div> <div><div class="font-bold">${escape(contact.name)}</div></div> </div></td> <td>${escape(contact.company)} <br> <span class="badge badge-ghost badge-sm">${escape(contact.job)}</span></td> <td>${escape(contact.email)}</td> <th><form method="POST" action="?/delete"><input type="hidden" name="id" hidden${add_attribute("value", contact.id, 0)}> <button class="btn btn-error text-white btn-xs" data-svelte-h="svelte-124cnva">Delete</button> </form></th> </tr>`;
  })}</tbody>  <tfoot data-svelte-h="svelte-crxcoc"><tr><th></th> <th>Name</th> <th>Job</th> <th>Email</th> <th></th></tr></tfoot></table></div> </div>`;
});
export {
  Page as default
};
