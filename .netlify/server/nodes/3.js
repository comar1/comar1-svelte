import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.6CZzyXi5.js","_app/immutable/chunks/scheduler.CQnL6_L5.js","_app/immutable/chunks/index.CZKLLyn7.js"];
export const stylesheets = ["_app/immutable/assets/3.fvephdyl.css"];
export const fonts = [];
