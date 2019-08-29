import {Request, Response} from 'express';

class IndexController {
    index (req: Request, res: Response) {
        res.json({text: 'API is /api/games'});
    }
}

/* instanciar clas creada*/
export const indexcontroller =new IndexController();