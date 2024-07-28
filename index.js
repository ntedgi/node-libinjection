const addon = require('./build/Release/injection');

class SQLInjection {
    constructor() {
        this.addon = addon;
    }
    // check if input is SQL Injection
    // return { isSqli: boolean, fingerprint: string }
    check(input) {
        const { is_sqli, fingerprint } = this.addon.checkSQLInjection(input);
        return {
            isSqli: is_sqli,
            fingerprint
        }
    }
    // check if input is SQL Injection
    // return boolean
    has(input) {
        return this.addon.hasSQLInjection(input).is_sqli;
    }
}

module.exports = {
    SQLInjection
};
