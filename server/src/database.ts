import mysql from 'mysql';
import keys from './keys';


const conn = (mysql.createPool(keys.datebase));

conn.getConnection((err:mysql.MysqlError, connection:mysql.PoolConnection) => {
    if (err) {
        throw err
    }else{
        conn.releaseConnection(connection);
        console.log('db conectada');
        return; 
    }

});



export default conn;