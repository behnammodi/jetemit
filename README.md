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