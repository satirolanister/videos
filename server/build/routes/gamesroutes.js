"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamecontroller_1 = __importDefault(require("../controllers/gamecontroller"));
/*
import gamescontroller from '../controllers/gamecontroller';
esto se usa cuando el controller tiene esta estructura
   const gamescontroller =new GamesController();
   export default gamescontroller;
*/
class gameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamecontroller_1.default.list);
        this.router.get('/:id', gamecontroller_1.default.get_one);
        this.router.post('/', gamecontroller_1.default.create);
        this.router.put('/:id', gamecontroller_1.default.put);
        this.router.delete('/:id', gamecontroller_1.default.delete);
    }
}
const gameroutes = new gameRoutes();
exports.default = gameroutes.router;
