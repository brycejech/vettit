
'use strict';

const   crypto = require('crypto'),
        bcrypt = require('bcrypt'),
        uuid   = require('uuid/v4');

async function hashPassword(password){
    return bcrypt.hash(password, 12);
}

async function validatePassword(password, hash){
    return bcrypt.compare(password, hash);
}

function nonce(){
    return crypto.randomBytes(56).toString('hex');
}

module.exports = {
    hashPassword,
    validatePassword,
    nonce,
    uuid
}
