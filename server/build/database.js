"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const conn = mysql_1.default.createPool(keys_1.default.datebase);
conn.getConnection((err, connection) => {
    if (err) {
        connection.release();
        console.log({ "code": 100, "status": "Error" });
        return;
    }
    console.log('connected as id ', connection.threadId);
    connection.on('error', (err) => {
        console.log({ "code": 100, "status": "Error in connection database" });
        return;
    });
});
exports.default = conn;
