"use strict";

exports.__esModule = true;
/**
 * @description subscribes repo
 * @private
 */
var subscribes = {};

/**
 * @description add listener
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */
function on(name, func) {
  if (typeof func !== "function")
    throw "on(" + name + ", ↴), Second argument is not function, please check";
  if (!subscribes[name]) subscribes[name] = { count: 0, funcs: {} };

  const key = subscribes[name].count++;
  subscribes[name].funcs[key] = func;
  return function() {
    delete subscribes[name].funcs[key];
  };
};

/**
 * @description like "on" but just run once
 * @public
 * @param {string} name name listener
 * @param {function} func function for call
 * @returns {function} unsubscribe function
 */
function once(name, func) {
  var unsubscribe = on(name, function () {
    func.apply(undefined, arguments);
    unsubscribe();
  });
  return unsubscribe;
};

/**
 * @description dispatch all listener
 * @public
 * @param {string} name name listener
 * @param {any} arg argument for send to on(...)
 * @returns {undefined} nothing
 */
function emit(name, arg) {
  if (subscribes[name])
    for (var func in subscribes[name].funcs)
      subscribes[name].funcs[func] && subscribes[name].funcs[func](arg);
};

/**
 * @description unsubscribe listener
 * @public
 * @param {string} name name listener
 * @param {function} func the function that you want to unsubscribe If not defined, all subscriptions will be canceled
 * @returns {undefined} nothing
 */
function unsubscribeOf(name, func) {
  if (func)
    for (const key in subscribes[name].funcs){
      if (subscribes[name].funcs[key] === func)
        delete subscribes[name].funcs[key];
    }
  else delete subscribes[name];
};

exports.unsubscribeOf = unsubscribeOf;

exports.on = on;

exports.once = once;

exports.emit = emit;