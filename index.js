const addon = require('./build/Release/myaddon');

const input = `SELECT * FROM members WHERE username = 'admin'--' AND password = 'password' ';`
const result = addon.checkSQLInjection(input);

if (result.is_sqli) {
  console.log(`SQL Injection detected with fingerprint: ${result.fingerprint}`);
} else {
  console.log('No SQL Injection detected');
}
