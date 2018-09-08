'use strict';

const ds = require('../../ds');


function Status(obj){
    if(!(obj.id && obj.name)) return;

    this.id   = obj.id;
    this.name = obj.name;

    return this;
}

async function all(){
    try{
        const statuses = await ds.getAllStatuses();

        return statuses.map(status => new Status(status));
    }
    catch(e){ return e }
}

async function get(obj){
    if(obj.hasOwnProperty('id')) return await _getById(obj.id);
}

async function _getById(id){
    if(!id) return;

    try{
        const status = await ds.getStatus(id);

        if(status) return new Status(status);
    }
    catch(e){ return e }
}

async function add(name){
    if(!name) return;

    try{
        status = await ds.addStatus(name);

        return new Status(status);
    }
    catch(e){ return e }
}


module.exports = {
    all,
    get,
    add
}
