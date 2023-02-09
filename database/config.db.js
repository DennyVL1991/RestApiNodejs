import mongoose from 'mongoose';

const mongoDB = 'mongodb+srv://user_web_server1:JBcpJzL47JOkSMCA@clusterwebserver.pvnrfgv.mongodb.net/webServerDB';

const dbConnection = async() =>{

try {

   await mongoose.connect(mongoDB);

   console.log("Base de Datos Ready!!!");

    
} catch (error) {
    console.log(error);
    throw new Error("Error en Conexion Base de Datos");
}


}


export  {
    dbConnection
}