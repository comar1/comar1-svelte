import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".background.svelte-136qzpr{background:rgb(148,163,184);background:linear-gradient(90deg, rgba(148,163,184,1) 0%, rgba(249,249,250,1) 0%, rgba(220,231,250,1) 0%, rgba(77,0,185,1) 0%, rgba(207,221,246,1) 100%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="h-[full] w-screen text-left py-[95px] sticky top-0 left-[20%] background space-y-12 svelte-136qzpr"><div class="font-cool text-center text-[34px] text-blue-900 italic w-screen" data-svelte-h="svelte-v6pomo"><h2 class="bg-white w-1/4 mx-auto">Contact Me</h2></div> <div><div class="bg-white w-[30rem] h-[full] my-8 p-8 -pb-3 mx-auto rounded-md "> <form method="POST" data-svelte-h="svelte-1eyuyi6"><p>From:</p> <input type="text" id="from" name="from" required> <p>Email:</p> <input type="email" id="email" name="email" required> <p>Message:</p> <textarea id="message" name="message" required></textarea> <button type="submit">Send</button></form></div></div> </div>`;
});
export {
  Page as default
};
