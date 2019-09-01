"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const games = yield conn.query('select * from games');
            return res.json(games[0]);
        });
    }
    get_one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const game = yield conn.query('select * from games where id=?', [id]);
            if (game.length > 0) {
                return res.json(game[0]);
            }
            else {
                return res.status(404).json({
                    message: 'Games not found'
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newGame = req.body;
            const conn = yield database_1.connect();
            yield conn.query('insert into games set ?', [newGame]);
            res.json({
                message: 'Game created'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield database_1.connect();
            yield conn.query('delete from games where id=?', [id]);
            res.json({
                message: 'Game deleted'
            });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const game = req.body;
            yield conn.query('update games set ? where id=?', [game, id]);
        });
    }
}
/* instanciar class creada*/
const gamescontroller = new GamesController();
exports.default = gamescontroller;
/*
Tambien se puede exportar controller de la siguinete manera
   export const gamescontroller =new GamesController();
*/ 
