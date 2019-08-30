import mysql from 'mysql';
import keys from './keys';


const conn = (mysql.createPool(keys.datebase));

conn.getConnection((err:mysql.MysqlError, connection:mysql.PoolConnection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }if (connection) connection.release()    
    return;
});



export default conn;