const { on, once, emit, unsubscribeOf } = require("./index");

const unsubscribeA = on("A", arg => {
  if (arg === true) console.log("emit A 1", arg);
  else throw "arg is incorrect";
});

const unsubscribeB = on("A", arg => {
  if (arg === true) console.log("emit A 2", arg);
  else throw "arg is incorrect";
});

on("B", arg => {
  if (typeof arg === "number") console.log("emit B", arg);
  else throw "arg is incorrect";
});

emit("A", true);

for (let i = 0; i < 10; i++) emit("B", i);

unsubscribeA();
emit("A", true);

once("C", arg => {
  console.log("emit C", arg.msg);
});

emit("C", { msg: "hello" });
emit("C", { msg: "bye" });
emit("C", { msg: "bye" });

console.log("Now we will test unsubscribeOf");

function logA(arg) {
  console.log(arg, "log A");
}
function logB(arg) {
  console.log(arg, "log B");
}
for (let i = 0; i < 10; i++) on("logs", logA);

on("logs", logB);

emit("logs", "emit logs funtions running");

unsubscribeOf("logs", logA);
emit("logs", "some logA functions are unsubscribed except");

unsubscribeOf("logs");
emit("logs", "There is no function to run");
