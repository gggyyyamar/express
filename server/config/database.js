const { createPool } = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' })
const pool = createPool({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
    connectionLimit: 10
})

module.exports = pool;