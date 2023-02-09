import express from 'express';
import cors from'cors';

import { dbConnection } from '../database/config.db.js';
import { router } from '../routes/user.routes.js';

class Server{

    constructor(){
        this.app = express();
        this.port = 8080;
        this.connectarDB();
        this.middlewares();
        this.routes();

    }

    async connectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use('/api', router);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Saliendo por el puerto ${this.port}`);
        });
    }
    
}

export  {
    Server
}