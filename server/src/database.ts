import { createPool } from 'mysql2/promise';
import Connection = require('mysql/lib/Connection');

export  async function connect() {
     const conn = await createPool({
        host : 'localhost',
        user : 'root',
        password: 'prueba123',
        database: 'ng_games_db',
        connectionLimit: 10
    });
    return conn;
}