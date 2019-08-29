import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }
    public get_one (req: Request, res: Response){
        res.json({text: 'This is game ' + req.params.id});
    }
    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game saved'});
    }
    public delete (req: Request, res: Response){
        res.json({ text: 'Daleting game ' + req.params.id});     
    }
    public put (req: Request, res: Response){
        res.json({text: 'actualizando juego.. '+ req.params.id});
    }
}

/* instanciar clas creada*/
const gamescontroller =new GamesController();
   export default gamescontroller;
/*
Tambien se puede exportar controller de la siguinete manera 
   export const gamescontroller =new GamesController();
*/