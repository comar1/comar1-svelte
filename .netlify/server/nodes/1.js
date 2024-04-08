

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dcFEa8U0.js","_app/immutable/chunks/scheduler.CQnL6_L5.js","_app/immutable/chunks/index.CZKLLyn7.js","_app/immutable/chunks/entry.CML7yvxR.js"];
export const stylesheets = [];
export const fonts = [];
