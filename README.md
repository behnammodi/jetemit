## JETEMIT

[![NPM](https://nodei.co/npm/jetemit.png)](https://nodei.co/npm/jetemit/)

[![install size](https://packagephobia.now.sh/badge?p=jetemit)](https://packagephobia.now.sh/result?p=jetemit) [![dependencies](https://david-dm.org/uxitten/jetemit.svg)](https://david-dm.org/uxitten/jetemit.svg)

event manager

## Install
```npm
npm install jetemit --save
```

## use
call in a.js file

```javascript
import { emit } from 'jetemit';

emit('TIME', new Date().toString());
```

listen b.js file

```javascript
import { on } from 'jetemit';

on('TIME', time => {
  console.log(time);
});
```

unsubscribe listener
```javascript
import { on } from 'jetemit';

const unsubscribe = on('TIME', time => {
  console.log(time);
});

unsubscribe();
```