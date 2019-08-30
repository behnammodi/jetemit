const { on, once, emit, unsubscribeOf } = require("./index");

const unsubscribeA = on("A", arg => {
  console.assert(arg === true, "arg is incorrect");
  console.log("emit A 1", arg);
});

const unsubscribeB = on("A", arg => {
  console.assert(arg === true, "arg is incorrect");
  console.log("emit A 2", arg);
});

on("B", arg => {
  console.assert(typeof arg === "number", "arg is incorrect");
  console.log("emit B", arg);
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

const unsubscribeGetMoney1 = on("getmoney", () => {
  return 1000;
});

const unsubscribeGetMoney2 = on("getmoney", () => {
  return 2000;
});

const refunds = emit("getmoney");
console.log("refunds", refunds);
console.assert(refunds.length == 2, "refunds error");

unsubscribeGetMoney1();
unsubscribeGetMoney2();

const refunds2 = emit("getmoney");
console.log("refunds2", refunds2);
console.assert(refunds2.length == 0, "refunds2 error");
