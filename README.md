## jetemit

![jetemit](http://itten.ir/file/jetemit-logo.png)

[![NPM](https://nodei.co/npm/jetemit.png)](https://nodei.co/npm/jetemit/)

[![install size](https://packagephobia.now.sh/badge?p=jetemit)](https://packagephobia.now.sh/result?p=jetemit) [![dependencies](https://david-dm.org/uxitten/jetemit.svg)](https://david-dm.org/uxitten/jetemit.svg)

events manager very simple

## install
```npm
npm install jetemit --save
```

## import
```javascript
const { on, emit } = require('jetemit');
//or
import { on, emit } from 'jetemit';
```

## use
call
```javascript
import { emit } from 'jetemit';
/**
 * emit(name, value);
 * name is string
 * value any 
 */
emit('TIME', '2018-12-01 12:30');
```

listener
```javascript
import { on } from 'jetemit';
/**
 * on(name,function)
 * name is string
 */
on('TIME', time => {
  console.log(time);
});
```

unsubscribe listener
```javascript
import { on } from 'jetemit';
/**
 * on return unsubscribe function
 */
const unsubscribe = on('TIME', time => {
  console.log(time);
});

unsubscribe();
```