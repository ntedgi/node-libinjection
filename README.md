# libinjection -  Node.js wrapper for  libinjection C/C++ library

it's a simple and fast library to detect SQL Injection in a string.

### libinjection C/C++ library: https://github.com/libinjection/libinjection

```js
const {SQLInjection} = require('./index');
const sqli = new SQLInjection();
const input = `SELECT * FROM members WHERE username = 'admin'--' AND password = 'password' ';`

console.log(sqli.has(input)); // true
console.log(sqli.check(input)); // { isSqli: true, fingerprint: 'Eoknk' }
```


```
===================
  Find SQL Inject  
===================

Platform info:
==============
   Darwin 23.5.0 x64
   Node.JS: 18.17.1
   V8: 10.2.154.26-node.26
   CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz × 12
   Memory: 32 GB

Suite: has Sql Injection
========================

✔ using libinjection                4,827 ops/sec
✔ perfect-express-sanitizer*          341 ops/sec

   using libinjection             +1,316.39%      (4,827 ops/sec)   (avg: 207μs)
   perfect-express-sanitizer* (#)       0%        (341 ops/sec)   (avg: 2ms)

┌───────────────────────────┬────────────────────────────────────────────────────┐
│ using libinjection        │ ██████████████████████████████████████████████████ │
├───────────────────────────┼────────────────────────────────────────────────────┤
│ perfect-express-sanitizer │ ████                                               │
└───────────────────────────┴────────────────────────────────────────────────────┘


-----------------------------------------------------------------------
```
