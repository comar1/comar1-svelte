

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D6EeB2dj.js","_app/immutable/chunks/scheduler.CQnL6_L5.js","_app/immutable/chunks/index.CZKLLyn7.js"];
export const stylesheets = [];
export const fonts = [];
