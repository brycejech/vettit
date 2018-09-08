'use strict';

const crypto = require('crypto'),
      bcrypt = require('bcrypt'),
      uuid   = require('uuid/v4');

// Data Store
const ds = require('../ds');


function User(obj){

    if(!(
           obj.id
        && obj.name
        && obj.email
        && obj.username
        && obj.password
        && obj.uuid
        && obj.registered
    )) return;

    this.id         = obj.id;
    this.name       = obj.name;
    this.email      = obj.email;
    this.username   = obj.username;
    this.password   = obj.password;
    this.uuid       = obj.uuid;
    this.registered = obj.registered;

    return this;
}

User.prototype.validatePassword = async function validatePassword(password){
    return await bcrypt.compare(password, this.password);
}

async function getAll(){
    try{
        const result = await ds.getAllUsers();
        if(result) return result.map(user => new User(user));
    }
    catch(e){ return e }
}

async function get(obj){
    if(obj.hasOwnProperty('id'))       return _getById(obj.id);
    if(obj.hasOwnProperty('email'))    return _getByEmail(obj.email);
    if(obj.hasOwnProperty('username')) return _getByUsername(obj.username);
    if(obj.hasOwnProperty('uuid'))     return _getByUuid(obj.uuid);
}

async function _getById(id){
    try{
        const result = await ds.getUserById(id);
        if(result) return new User(result);
    }
    catch(e){ return e }
}

async function _getByEmail(email){
    try{
        const result = await ds.getUserByEmail(email);
        if(result) return new User(result);
    }
    catch(e){ return e }
}

async function _getByUsername(username){
    try{
        const result = await ds.getUserByUsername(username);

        return new User(result);
    }
    catch(e){ return e }
}

async function _getByUuid(uuid){
    try{
        const result = await ds.getUserByUuid(uuid);

        return new User(result);
    }
    catch(e){ return e }
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
        password: await bcrypt.hash(obj.password, 12),
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


/*
    =======
    HELPERS
    =======
*/
function _nonce(){
    return crypto.randomBytes(56).toString('hex');
}

module.exports = {
    register,
    get,
    getAll
}
