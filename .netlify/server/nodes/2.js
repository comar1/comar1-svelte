

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BZNCibWV.js","_app/immutable/chunks/scheduler.CQnL6_L5.js","_app/immutable/chunks/index.CZKLLyn7.js","_app/immutable/nodes/3.6CZzyXi5.js"];
export const stylesheets = ["_app/immutable/assets/2.BP-a1I4h.css","_app/immutable/assets/3.fvephdyl.css"];
export const fonts = [];
