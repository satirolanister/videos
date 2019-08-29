import express, { Application } from 'express';
import indexRoutes from './routes/Indexroutes';
import gamesroutes from './routes/gamesroutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app:Application
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        /*este es un middleware que recibe datos en formato json */
        this.app.use(express.json());
        /*para enviar info por un formulario html*/
        this.app.use(express.urlencoded({extended : false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesroutes);
    }

    star(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
            
        });
    }
}

const server= new Server();
server.star();