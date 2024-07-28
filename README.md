# node-libinjection

This is a addon of the SQLi detection tool `libinjection` to NodeJS.



```js
const {SQLInjection} = require('./index');
const sqli = new SQLInjection();
const input = `SELECT * FROM members WHERE username = 'admin'--' AND password = 'password' ';`

console.log(sqli.has(input)); // true
console.log(sqli.check(input)); // { isSqli: true, fingerprint: 'Eoknk' }

    // SQL Injection detected with fingerprint: Eoknk
```