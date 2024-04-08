import * as server from '../entries/pages/load/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/load/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/load/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CZPq8IIz.js","_app/immutable/chunks/scheduler.CQnL6_L5.js","_app/immutable/chunks/index.CZKLLyn7.js"];
export const stylesheets = ["_app/immutable/assets/4.CPfSLJoC.css"];
export const fonts = [];
