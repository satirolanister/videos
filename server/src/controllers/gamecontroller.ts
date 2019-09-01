import {Request, Response} from 'express';
import {connect} from '../database';

class GamesController {

    public async list (req: Request, res: Response):Promise<Response> {
        const conn = await connect();
        const games = await conn.query('select * from games');
        return res.json(games[0]);
    }
    public async get_one (req: Request, res: Response):Promise<Response>{
        const {id} = req.params;
        const conn = await connect();
        const game = await conn.query('select * from games where id=?',[id]);
        if (game.length > 0) {
            return res.json(game[0]);
        }else{
            return res.status(404).json({
                message: 'Games not found'
            })
        }
        
    }
    public async create (req: Request, res: Response):Promise<void>{ 
        const newGame=req.body;
        const conn = await connect();
        await conn.query('insert into games set ?', [newGame]);
        res.json({
            message: 'Game created'
        }); 
    }
    public async delete (req: Request, res: Response):Promise<void>{
        const {id} = req.params;
        const conn = await connect();
        await conn.query('delete from games where id=?',[id]);
        res.json({
            message:'Game deleted'
        });   
    }
    public async put (req: Request, res: Response){
        const {id}=req.params;
        const game = req.body;
        const conn = await connect();
        await conn.query('update games set ? where id=?',[game, id]);
    }
}

/* instanciar class creada*/
const gamescontroller =new GamesController();
   export default gamescontroller;
/*
Tambien se puede exportar controller de la siguinete manera 
   export const gamescontroller =new GamesController();
*/