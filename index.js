const pg = require('pg-promise')();

const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'exercises',
    user: 'jenlij',
    //password: 'user-password'
};
const db = pg(dbConfig);

function allFacilities() {
    return db.query()
}