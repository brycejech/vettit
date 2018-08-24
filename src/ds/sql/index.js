'use strict';

const fs = require('fs');

const queries = [
    {
        name:   'registerUser',
        script: 'register-user.sql'
    },
    {
        name: 'usernameExists',
        script: 'username-exists.sql'
    },
    {
        name: 'emailExists',
        script: 'email-exists.sql'
    }
]

module.exports = {};

queries.forEach(query => {
    module.exports[query.name] = fs.readFileSync(`${ __dirname }/queries/${ query.script }`, 'utf8');
});
