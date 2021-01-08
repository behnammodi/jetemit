const { on, once, emit, unsubscribeOf } = require("./index");

const expect = (process, desc) => {
  if (process()) console.log('✅', desc);
  else console.log('❌', desc);
  return expect;
}

const INC = 'INC';
const DEC = 'DEC';

let refunds;
let counter = 0;

const unsubscribeINC = on(INC, () => {
  counter++
  return counter;
});

const incremental = () => {
  counter++
  return counter;
}

on(INC, incremental);

once(DEC, () => {
  counter--;
  return counter;
});

/**
 * expects:
 * [action]                            [variable]  [result]  [desc]
 * S1:                                 counter     0         nothing
 * S2:emit(INC)                        counter     2         two unit
 * S2.1                                refunds     [1,2]     ...
 * S3:emit(DEC)                        counter     1         one unit
 * S4:unsubscribeINC()                 counter     1         don't effect of anything
 * S5:emit(INC)                        counter     2         just one more
 * S6:emit(DEC)                        counter     2         without any effect because it's once
 * S7:unsubscribeOf(incremental)       counter     2         don't effect of anything
 * S8:emit(INC)                        counter     2         without effect because doesn't has listener
 * S8.1                                refunds     []        ...
 */

expect
  (() => {
    // nothing
    return counter === 0
  }, 'S1')
  (() => {
    refunds = emit(INC)
    return counter === 2
  }, 'S2')
  (() => {
    // nothing
    return refunds[0] === 1 && refunds[1] === 2 && refunds.length === 2
  }, 'S2.1')
  (() => {
    emit(DEC)
    return counter === 1
  }, 'S3')
  (() => {
    unsubscribeINC()
    return counter === 1
  }, 'S4')
  (() => {
    emit(INC)
    return counter === 2
  }, 'S5')
  (() => {
    emit(DEC)
    return counter === 2
  }, 'S6')
  (() => {
    unsubscribeOf(INC, incremental)
    return counter === 2
  }, 'S7')
  (() => {
    refunds = emit(INC)
    return counter === 2
  }, 'S8')
  (() => {
    // nothing
    return refunds.length === 0
  }, 'S8.1');