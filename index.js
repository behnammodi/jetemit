"use strict";

exports.__esModule = true;
var subscribes = {};

exports.on = function on(name, func) {
  if (typeof (x) !== 'function') throw ('func in ' + name + ' is not function');
  subscribes[name] = subscribes[name] || { happen: null, funcs: {}, count: 0 };
  var id = name + (subscribes[name].count++);
  subscribes[name].funcs[id] = func;
  return function () {
    delete subscribes[name].funcs[id]
  };
};

exports.emit = function emit(name, arg) {
  if (subscribes[name]) {
    subscribes[name].happen = arg
    Object.keys(subscribes[name].funcs).forEach(function (key) {
      subscribes[name].funcs[key](arg);
    });
  }
};

exports.happen = function happen(name) {
  return subscribes[name].happen
};