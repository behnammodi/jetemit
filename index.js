"use strict";

exports.__esModule = true;
var subscribes = {};

var on = exports.on = function on(name, func) {
  subscribes[name] = subscribes[name] || [];
  var index = subscribes[name].push(func) - 1;
  return function () {
    subscribes[name][index] = undefined;
  };
};

var emit = exports.emit = function emit(name, arg) {
  if (subscribes[name]) {
    subscribes[name].forEach(function (func) {
      func && func(arg);
    });
  }
};


