## JETEMIT

event manager

## Install
```npm
npm install jetemit --save
```

## use
call in a.js file

```javascript
import { emit } from 'jetemit';

const getTime = () => {
  return new Date().toString();
};

emit('TIME', getTime());
```

listen b.js file

```javascript
import { on } from 'jetemit';

on('TIME', time => {
  console.log(time);
});
```

unsubscribe lisener
```javascript
const unsubscribe = on('TIME', time => {
  console.log(time);
});

unsubscribe();
```