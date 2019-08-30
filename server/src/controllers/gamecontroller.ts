import {Request, Response} from 'express';
import conn from '../database';


class GamesController {

    public async list (req: Request, res: Response) {
        try {
            const games = await conn.query('SELECT * FROM games');
            res.json(games);
        } catch (e) {
            res.send(e);
        }
        
    }
    public get_one (req: Request, res: Response){
        res.json({text: 'This is game ' + req.params.id});
    }
    public async create (req: Request, res: Response){ 
        await conn.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
    }
    public delete (req: Request, res: Response){
        res.json({ text: 'Deleting game ' + req.params.id});     
    }
    public put (req: Request, res: Response){
        res.json({text: 'actualizando juego.. '+ req.params.id});
    }
}

/* instanciar class creada*/
const gamescontroller =new GamesController();
   export default gamescontroller;
/*
Tambien se puede exportar controller de la siguinete manera 
   export const gamescontroller =new GamesController();
*/