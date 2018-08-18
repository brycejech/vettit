
'use strict';

const queries = require('./sql');

const db = require('../db');

(async () => {

    for(let query of queries){

        try {
            console.log(`Creating '${ query.name }' table`);

            const result = await db.query(query.query, []);
            console.log(`Successfully created table '${ query.name }'!`);
            console.log('----------------------------');
        }
        catch(e){
            console.log(`Error creating '${ query.name }' table:`);
            console.log(e.message);
            console.log('----------------------------');
        }

    }

    db.disconnect();

})();
