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
  if (typeof (func) !== 'function') throw ('func in ' + name + ' is not function');
  subscribes[name] = subscribes[name] || { happen: null, funcs: {}, count: 0 };
  var id = name + (subscribes[name].count++);
  subscribes[name].funcs[id] = func;
  return function () {
    delete subscribes[name].funcs[id]
  };
};

/**
 * dispatch all listener 
 * @param {string} name 
 * @param {any} arg 
 * @returns {undefined} nothing
 */
exports.emit = function emit(name, arg) {
  if (subscribes[name]) {
    subscribes[name].happen = arg
    Object.keys(subscribes[name].funcs).forEach(function (key) {
      subscribes[name].funcs[key](arg);
    });
  }
};

/**
 * get last emit arg value
 * @param {string} name 
 * @returns {any} any
 */
exports.happen = function happen(name) {
  return subscribes[name].happen
};