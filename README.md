![jetemit](http://itten.ir/file/jetemit-logo.png)

[![NPM](https://nodei.co/npm/jetemit.png)](https://nodei.co/npm/jetemit/)

[![install size](https://packagephobia.now.sh/badge?p=jetemit)](https://packagephobia.now.sh/result?p=jetemit) [![dependencies](https://david-dm.org/uxitten/jetemit.svg)](https://david-dm.org/uxitten/jetemit.svg)

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://img.shields.io/npm/v/jetemit.svg" alt="Version">
</a>

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://img.shields.io/npm/l/jetemit.svg" alt="License">
</a>

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://img.shields.io/npm/dm/jetemit.svg" alt="Downloads">
</a>

 

events manager very simple

### Compatibility

|All browser|Backend (Nodejs)|Mobile (React Native)|
|-----------|----------------|---------------------|
|✅         |✅              |✅                   |

Compatibility with all javascript project

## Install
```npm
npm install jetemit --save
```

## Import
```javascript
const { on, emit } = require('jetemit');
//or
import { on, emit } from 'jetemit';
```

## Use
#### Call
```javascript
import { emit } from 'jetemit';
/**
 * emit(name, value);
 * name is string
 * value any 
 */
emit('TIME', '2018-12-01 12:30');
```
#### Listener
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
```javascript
import { once } from 'jetemit';
/**
 * Like on but run one time
 */
once('TIME', time => {
  console.log(time);
});
```
#### Unsubscribe listener
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

#### Using unsubscribeOf function 
```javascript
import { unsubscribeOf } from 'jetemit';
/**
 * Unsubscribe all subscribed functions for TIME
 */
unsubscribeOf('TIME')
```
#### or
```javascript
/**
 * Unsubscribe a Function which subscribed for TIME
 */
unsubscribeOf('TIME',timeFunction)
```
