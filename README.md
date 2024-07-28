# node-libinjection

This is a addon of the SQLi detection tool `libinjection` to NodeJS.



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

Chart: https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22using%20libinjection%22%2C%22perfect-express-sanitizer%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Dataset%201%22%2C%22backgroundColor%22%3A%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%22borderColor%22%3A%22rgb%2854%2C%20162%2C%20235%29%22%2C%22borderWidth%22%3A1%2C%22data%22%3A%5B4826.797507701354%2C340.781315961525%5D%7D%5D%7D%2C%22options%22%3A%7B%22responsive%22%3Afalse%2C%22legend%22%3A%7B%22display%22%3Afalse%2C%22position%22%3A%22top%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22has%20Sql%20Injection%7C%28ops%2Fsec%29%22%7D%2C%22layout%22%3A%7B%22padding%22%3A20%7D%7D%7D
-----------------------------------------------------------------------


```