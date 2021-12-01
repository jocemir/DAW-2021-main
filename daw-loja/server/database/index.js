const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'mysql.ideagestor.com.br',
        user: 'ideagestor09',
        password: '88304918abc',
        database: 'ideagestor09'
    }
});


module.exports = knex;