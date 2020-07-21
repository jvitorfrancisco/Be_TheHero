const knex = require('knex');
const configurations = require('../../knexfile');

const env = process.env.NODE_ENV === 'test' ? configurations.test : configurations.development;

const connection = knex(env);

module.exports = connection;