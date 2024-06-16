/**
 * `isClient` is a constant that checks if the code is running in a browser environment.
 * It checks if the global `window` object is defined.
 * If `window` is defined, it means the code is running in a browser environment, so `isClient` will be `true`.
 * If `window` is not defined, it means the code is not running in a browser environment (like Node.js), so `isClient` will be `false`.
 * @constant
 * @type {boolean}
 */
const isClient: boolean = typeof window !== 'undefined';
export default isClient;
