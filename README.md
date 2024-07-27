# node-libinjection

This is a addon of the SQLi detection tool `libinjection` to NodeJS.



```js
    const input = `SELECT * FROM members WHERE username = 'admin'--' AND password = 'password' ';`
    const result = libinjection.checkSQLInjection(input);

    if (result.is_sqli) {
    console.log(`SQL Injection detected with fingerprint: ${result.fingerprint}`);
    } else {
    console.log('No SQL Injection detected');
    }

    // SQL Injection detected with fingerprint: Eoknk
```