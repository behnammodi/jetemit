/**
 * @description add listener
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */
export function on(name: string, func: Function): Function;
/**
 * @description dispatch all listener
 * @public
 * @param {string} name name listener
 * @param {any} arg argument for send to on(...)
 * @returns {array} refunds all listen can return data
 */
export function emit(name: string, arg: any): any[];
/**
 * @description like "on" but just run once
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */
export function once(name: string, func: Function): Function;
/**
 * @description unsubscribe listener
 * @public
 * @param {string} name name listener
 * @param {function} func the function that you want to unsubscribe If not defined, all subscriptions will be canceled
 * @returns {undefined} nothing
 */
export function unsubscribeOf(name: string, func: Function): undefined;
