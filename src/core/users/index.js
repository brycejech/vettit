'use strict';

const crypto = require('crypto'),
      bcrypt = require('bcrypt'),
      uuid   = require('uuid/v4');

// Data Store
const ds = require('../../ds');


function User(obj){

    this.name       = obj.name;
    this.email      = obj.email;
    this.username   = obj.username;
    this.password   = obj.password;
    this.uuid       = obj.uuid;
    this.registered = obj.registered;

    return this;
}


async function register(obj){

    if(!(
           obj.name
        && obj.email
        && obj.username
        && obj.password
    )){ return }

    const data = {
        name:     obj.name,
        email:    obj.email,
        username: obj.username,
        password: await _hashPassword(obj.password),
        uuid:     uuid()
    }

    try{
        const result = await ds.registerUser(data);

        return new User(result);
    }
    catch(e){
        return e;
    }
}

async function get(obj){
    if(obj.hasOwnProperty('email')) return getByEmail(obj.email);
    if(obj.hasOwnProperty('username')) return getByUsername(obj.username);
    if(obj.hasOwnProperty('uuid')) return getByUuid(obj.uuid);
}

async function getByEmail(email){
    try{
        const result = await ds.getUserByEmail(email);

        return new User(result);
    }
    catch(e){ return e }
}

async function getByUsername(username){
    try{
        const result = await ds.getUserByUsername(username);

        return new User(result);
    }
    catch(e){ return e }
}

async function getByUuid(uuid){
    try{
        const result = await ds.getUserByUuid(uuid);

        return new User(result);
    }
    catch(e){ return e }
}


/*
    =======
    HELPERS
    =======
*/
async function _hashPassword(password){
    return bcrypt.hash(password, 12);
}

async function _validatePassword(password, hash){
    return bcrypt.compare(password, hash);
}

function _nonce(){
    return crypto.randomBytes(56).toString('hex');
}

module.exports = {
    register,
    get
}
