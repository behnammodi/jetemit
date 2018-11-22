"use strict";

exports.__esModule = true;
var subscribes = {};
var happens = {};

exports.on = function on(name, func) {
  subscribes[name] = subscribes[name] || [];
  var index = subscribes[name].push(func) - 1;
  return function () {
    subscribes[name][index] = undefined;
  };
};

exports.emit = function emit(name, arg) {
  if (subscribes[name]) {
    happens[name] = arg;
    subscribes[name].forEach(function (func) {
      func && func(arg);
    });
  }
};

exports.happen = function happen(name) {
  return happens[name];
};