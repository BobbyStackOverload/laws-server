const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY: ', e.query);
    }
});
const options = {
    host: 'drona.db.elephantsql.com',
    database: 'gvtuhfjp',
    user: 'gvtuhfjp',
    password: 'K5JlvIU77dBTxHqEAdlLWQD3RINIgeyl'
};
const db = pgp(options);
module.exports = db;