const {SQLInjection} = require('./index');
const sqli = new SQLInjection();
const input = `SELECT * FROM members WHERE username = 'admin'--' AND password = 'password' ';`
console.log(sqli.has(input));
console.log(sqli.check(input));