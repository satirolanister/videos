"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield database_1.default.query('SELECT * FROM games');
                res.json(games);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
    get_one(req, res) {
        res.json({ text: 'This is game ' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO games set ?', [req.body]);
                console.log(req.body);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    delete(req, res) {
        res.json({ text: 'Daleting game ' + req.params.id });
    }
    put(req, res) {
        res.json({ text: 'actualizando juego.. ' + req.params.id });
    }
}
/* instanciar class creada*/
const gamescontroller = new GamesController();
exports.default = gamescontroller;
/*
Tambien se puede exportar controller de la siguinete manera
   export const gamescontroller =new GamesController();
*/ 
