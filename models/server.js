const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = 8080;
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use('/api/usuarios', require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Saliendo por el puerto ${this.port}`);
        });
    }
    
}

module.exports = Server;