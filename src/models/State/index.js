'use strict';

const ds = require('../../ds');


function State(obj){
    if(!(obj.id && obj.name)) return;

    this.id   = obj.id;
    this.name = obj.name;

    return this;
}


async function all(){
    try{
        const states = await ds.getAllStates();

        return states.map(state => new State(state));
    }
    catch(e){ return e }
}

async function get(obj){
    if(obj.hasOwnProperty('id')) return await _getById(obj.id);
}

async function _getById(id){
    if(!id) return;

    try{
        const state = await ds.getState(id);

        if(state) return new State(state);
    }
    catch(e){ return e }
}

module.exports = {
    all,
    get
}
