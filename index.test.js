const { on, once, emit, unsubscribeOf } = require("./index");

function expect(task, condition, desc) {
  task()
  if (condition()) console.log('✅', desc);
  else console.log('❌', desc);
  return expect;
}

const INC = 'INC';
const DEC = 'DEC';

let refunds;
let counter = 0;

const unsubscribeINC = on(INC, function () {
  counter++
  return counter;
});

function incremental() {
  counter++
  return counter;
}

on(INC, incremental);

once(DEC, function () {
  counter--;
  return counter;
});

/**
 * expectes:
 * [action]                            [variable]  [result]  [desc]
 * S1:                                 counter     0         nothing
 * S2:emit(INC)                        counter     2         two unit
 * S2.1                                refunds     [1,2]     ...
 * S3:emit(DEC)                        counter     1         one unit 
 * S4:unsubscribeINC()                 counter     1         don't effect of anything
 * S5:emit(INC)                        counter     2         just one more    
 * S6:emit(DEC)                        counter     2         without any effect beacuse it's once
 * S7:unsubscribeOf(incremental)       counter     2         don't effect of anything
 * S8:emit(INC)                        counter     2         without effect beacuse doesn't has listener
 * S8.1                                refunds     []        ...
 */


expect(
  function () {
    // nothing
  },
  function () {
    return counter === 0
  },
  'S1'
)(
  function () {
    refunds = emit(INC)
  },
  function () {
    return counter === 2
  },
  'S2'
)(
  function () {
    // nothing
  },
  function () {
    return refunds[0] === 1 && refunds[1] === 2 && refunds.length === 2
  },
  'S2.1'
)(
  function () {
    emit(DEC)
  },
  function () {
    return counter === 1
  },
  'S3'
)(
  function () {
    unsubscribeINC()
  },
  function () {
    return counter === 1
  },
  'S4'
)(
  function () {
    emit(INC)
  },
  function () {
    return counter === 2
  },
  'S5'
)(
  function () {
    emit(DEC)
  },
  function () {
    return counter === 2
  },
  'S6'
)(
  function () {
    unsubscribeOf(INC, incremental)
  },
  function () {
    return counter === 2
  },
  'S7'
)(
  function () {
    refunds = emit(INC)
  },
  function () {
    return counter === 2
  },
  'S8'
)(
  function () {
    // nothing
  },
  function () {
    return refunds.length === 0
  },
  'S8.1'
);