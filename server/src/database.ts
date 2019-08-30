import mysql from 'mysql';
import keys from './keys';



const conn = mysql.createPool(keys.datebase);

conn.getConnection((err, connection) => {
    if (err) {
        connection.release();
        console.log({"code": 100, "status": "Error"});
        return;
    }
    console.log('connected as id ', connection.threadId);

    connection.on('error', (err) => {
        console.log({"code" : 100, "status" : "Error in connection database"});
        return; 
    })
    
});


export default conn;