"use strict";

exports.__esModule = true;
var subscribes = {};

/**
 * add listener 
 * @param {string} name 
 * @param {function} func 
 * @returns {function} unsubscribe function
 */
exports.on = function on(name, func) {
  if (typeof (func) !== 'function')
    throw ('on(' + name + ', ↴), Second argument is not function, please check');
  var subscribe = subscribes[name];
  if (!subscribe)
    subscribe = { happen: null, funcs: {}, count: 0 };
  var funcId = name + (subscribe.count++);
  subscribe.funcs[funcId] = func;
  return function () {
    delete subscribe.funcs[funcId]
  };
};

/**
 * dispatch all listener 
 * @param {string} name 
 * @param {any} arg 
 * @returns {undefined} nothing
 */
exports.emit = function emit(name, arg) {
  var subscribe = subscribes[name];
  if (subscribe) {
    subscribe.happen = arg;
    for (var func in subscribe.funcs)
      subscribe.funcs[func](arg);
  }
};

/**
 * get last emit arg value
 * @param {string} name 
 * @returns {any} any
 */
exports.happen = function happen(name) {
  return subscribes[name].happen;
};