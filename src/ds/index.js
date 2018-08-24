'use strict';

const db  = require('../db'),
      sql = require('./sql');

async function registerUser(user){

    const vals = [
        user.name,
        user.email,
        user.username,
        user.password,
        user.uuid
    ];

    try{
        const result = await db.query(sql.registerUser, vals);

        if(!result.rowCount){
            // Something bad happened
            return new Error('Registration Failed');
        }

        return result.rows[0];
    }
    catch(e){
        console.log(e);
        return new Error('Registration Failed');
    }
}

async function userExists(obj){
    if(!(obj.username || obj.email)) return;

    if(obj.hasOwnProperty('username')){
        try{
            const result = await db.query(sql.usernameExists, [obj.username]);

            if(result.rowCount){
                return result.rows[0].exists;
            }
            return false;
        }
        catch(e){ return e }
    }
    else if(obj.hasOwnProperty('email')){
        try{
            const result = await db.query(sql.emailExists, [obj.email]);

            if(result.rowCount){
                return result.rows[0].exists;
            }
            return false;
        }
        catch(e){ return e }
    }
}

const dataStore = {
    registerUser,
    userExists
}


module.exports = dataStore;
