'use strict';

const ds = require('../ds');

function Color(id, name, code){
    this.id   = id;
    this.name = name;
    this.code = code;

    return this;
}

async function all(){
    try{
        const colors = await ds.getAllColors();

        if(colors){
            return colors.map(color => new Color(color));
        }
        return [];
    }
    catch(e){ return e }
}


async function get(obj){
    if(obj.hasOwnProperty('id')) return await _getById(obj.id);
}

async function _getById(id){
    if(!id) return;

    try{
        const color = await ds.getColor(id);

        if(color) return new Color(color);
    }
    catch(e){ return e }
}

async function add(name, code){
    if(!(name && code)) return;

    try{
        const color = await ds.addColor(name, code);

        if(color) return new Color(color);
    }
    catch(e){ return e }
}

async function remove(id){
    if(!id) return;

    try{
        const deleted = await ds.deleteColor(id);

        return deleted;
    }
    catch(e){ return e }
}


module.exports = {
    all,
    get,
    remove
}
