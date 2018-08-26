'use strict';

const db  = require('../db'),
      sql = require('./sql');


/*
    =====
    USERS
    =====
*/
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

async function getUserByEmail(email){
    try{
        const result = await db.query(sql.getUserByEmail, [email]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function getUserByUsername(username){
    try{
        const result = await db.query(sql.getUserByUsername, [username]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function getUserByUuid(uuid){
    try{
        const result = await db.query(sql.getUserByUuid, [uuid]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}


/*
    ======
    COLORS
    ======
*/
async function getAllColors(){
    try{
        const result = await db.query(sql.getAllColors, []);

        if(result.rowCount) return result.rows
    }
    catch(e){ return e }
}

async function getColor(id){
    try{
        const result = await db.query(sql.getColor, [id]);

        if(result.rowCount) return result.rows[0]
    }
    catch(e){ return e }
}

async function addColor(name, code){
    if(!(name && code)) return;

    try{
        const result = await db.query(sql.addColor, [name, code]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function deleteColor(id){
    try{
        const result = await db.query(sql.deleteColor, [id]);

        return true;
    }
    catch(e){ return false }
}


/*
    ======
    STATES
    ======
*/
async function getAllStates(){
    try{
        const result = await db.query(sql.getAllStates, []);

        if(result.rowCount) return result.rows;
    }
    catch(e){ return e }
}

async function getState(id){
    try{
        const result = await db.query(sql.getState, [id]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}


/*
    ========
    STATUSES
    ========
*/
async function getAllStatuses(){
    try{
        const result = await db.query(sql.getAllStatuses, []);

        if(result.rowCount) return result.rows;
    }
    catch(e){ return e }
}

async function getStatus(id){
    try{
        const result = await db.query(sql.getStatus, [id]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function addStatus(name){
    try{
        const result = await db.query(sql.addStatus, [name]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}


/*
    ====
    TAGS
    ====
*/
async function getAllTags(){
    try{
        const result = await db.query(sql.getAllTags, []);

        if(result.rowCount) return result.rows;
    }
    catch(e){ return e }
}

async function getTagById(id){
    try{
        const result = await db.query(sql.getTagById, [id]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function getTagBySlug(slug){
    try{
        const result = await db.query(sql.getTagBySlug, [slug]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function addTag(name, slug, color){
    if(!(name && slug && color)) return;

    try{
        const result = await db.query(sql.addTag, [name, slug, color]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function deleteTag(id){
    try{
        const result = await db.query(sql.deleteTag, [id]);

        return true;
    }
    catch(e){ return false }
}


/*
    ========
    CHANNELS
    ========
*/
async function getAllChannels(){
    try{
        const result = await db.query(sql.getAllChannels, []);

        if(result.rowCount) return result.rows;
    }
    catch(e){ return e }
}

async function getChannelById(id){
    try{
        const result = await db.query(sql.getChannelById, [id]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function getChannelBySlug(slug){
    try{
        const result = await db.query(sql.getChannelBySlug, [slug]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function addChannel(name, slug, color){
    if(!(name && slug && color)) return;

    try{
        const result = await db.query(sql.addChannel, [name, slug, color]);

        if(result.rowCount) return result.rows[0];
    }
    catch(e){ return e }
}

async function deleteChannel(id){
    try{
        const result = await db.query(sql.deleteChannel, [id]);

        return true;
    }
    catch(e){ return e }
}


const dataStore = {

    // Users
    registerUser,
    userExists,
    getUserByEmail,
    getUserByUsername,
    getUserByUuid,

    // Colors
    getAllColors,
    getColor,
    addColor,
    deleteColor,

    // States
    getAllStates,
    getState,

    // Statuses
    getAllStatuses,
    getStatus,
    addStatus,

    // Tags
    getAllTags,
    getTagById,
    getTagBySlug,
    addTag,
    deleteTag,

    // Channels
    getAllChannels,
    getChannelById,
    getChannelBySlug,
    addChannel,
    deleteChannel
}

module.exports = dataStore;
