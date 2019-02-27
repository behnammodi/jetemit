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

function F(arg) {
  console.log(arg, "F");
}
function F2(arg) {
  console.log(arg, "F2");
}
for (let i = 0; i < 10; i++) on("F", F);

on("F", F2);

emit("F", "emit F funtions running");

unsubscribeOf("F", F);
emit("F", "some F functions are unsubscribed except");

unsubscribeOf("F");
emit("F", "There is no function to run");
