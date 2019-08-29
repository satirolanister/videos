import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.datebase);

pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.release();
    console.log('DB is COnnected');
});

export default pool;