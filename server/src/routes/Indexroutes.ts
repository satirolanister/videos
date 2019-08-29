import { Router } from 'express';
import { indexcontroller } from '../controllers/indexcontroller'

class indexRoutes {
    public router: Router =Router();
    constructor(){
        this.config();
    }
    config (): void{
        this.router.get('/', indexcontroller.index);
    }
}

const indexroutes = new indexRoutes();
export default indexroutes.router;
