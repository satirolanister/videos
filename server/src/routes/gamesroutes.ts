import { Router } from 'express';
import gamescontroller  from '../controllers/gamecontroller';
/*
import gamescontroller from '../controllers/gamecontroller';
esto se usa cuando el controller tiene esta estructura
   const gamescontroller =new GamesController();
   export default gamescontroller;
*/

class gameRoutes {
    public router: Router =Router();
    constructor(){
        this.config();
    }
    config (): void{
        this.router.get('/', gamescontroller.list);
        this.router.get('/:id', gamescontroller.get_one);
        this.router.post('/', gamescontroller.create);
        this.router.put('/:id', gamescontroller.put);
        this.router.delete('/:id', gamescontroller.delete);
    }
}

const gameroutes = new gameRoutes(); 
export default gameroutes.router;
