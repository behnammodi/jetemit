[![NPM](https://nodei.co/npm/jetemit.png)](https://nodei.co/npm/jetemit/)

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://img.shields.io/npm/v/jetemit.svg" alt="Version">
</a>

<a href="https://bundlephobia.com/result?p=jetemit">
<img src="https://badgen.net/bundlephobia/minzip/jetemit" alt="Minzipped size">
</a>

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://badgen.net/npm/dt/jetemit" alt="Downloads">
</a>

<a href="https://www.npmjs.com/package/jetemit">
  <img src="https://img.shields.io/npm/l/jetemit.svg" alt="License">
</a>

An event manager very simple

## Compatibility

| All browser | Backend (Nodejs) | Mobile (React Native) |
| ----------- | ---------------- | --------------------- |
| ✅          | ✅               | ✅                    |

Compatibility with all javascript project

## Install

```npm
npm install jetemit
```

## Import

```javascript
const { on, emit } = require("jetemit");
//or
import { on, emit } from "jetemit";
```

# Use

## Call

```javascript
import { emit } from "jetemit";

/**
 * emit(name, value);
 * name is string
 * value any
 */
emit("TIME", "2018-12-01 12:30");
```

## Listener

```javascript
import { on } from "jetemit";

/**
 * on(name,function)
 * name is string
 */
on("TIME", time => {
  console.log(time);
});
```

```javascript
import { once } from "jetemit";

/**
 * Like on but run one time
 */
once("TIME", time => {
  console.log(time);
});
```

## Unsubscribe listener

```javascript
import { on } from "jetemit";

/**
 * on return unsubscribe function
 */
const unsubscribe = on("TIME", time => {
  console.log(time);
});

unsubscribe();
```

## Using unsubscribeOf function

```javascript
import { unsubscribeOf } from "jetemit";

/**
 * Unsubscribe all subscribed functions for TIME
 */
unsubscribeOf("TIME");
```

## or

```javascript

/**
 * Unsubscribe a Function which subscribed for TIME
 */
unsubscribeOf("TIME", timeFunction);
```

## Refund from all listener

Please see this sample:

```javascript
// file a.js
import { on } from "jetemit";

on("CACHE_STSTEM_HEALTH", () => {
  return { state: "OK", id: "CACHE_SYSTEM_1" };
});
```
```javascript
// file b.jd
import { on } from "jetemit";

on("CACHE_STSTEM_HEALTH", () => {
  return { state: "OK", id: "CACHE_SYSTEM_2" };
});
```
```javascript
// file c.js
import { on, emit } from "jetemit";

const status = emit("CACHE_STSTEM_HEALTH");
console.log(status);
/*
[
  { state: "OK", id: "CACHE_SYSTEM_1" },
  { state: "OK", id: "CACHE_SYSTEM_2" }
]
*/
```

## Donate
BTC: `1NV1sjQnXwuyHgxQ8G5eWprhxsD5A8yN6r`