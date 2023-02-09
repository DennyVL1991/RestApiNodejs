
import { Role } from '../models/role.js';
import { Usuario } from '../models/usuario.js';

  const isRoleValid = async(role='') => {
        const existeRole = await Role.findOne({role});
        if(!existeRole){
            throw new Error(`No se puede crear un usuario con el role ${role}`);
        }
    }

  const emailExiste = async( email='' ) =>{

    const existeEmail = await Usuario.findOne( {email} ); 
    if(existeEmail){
       throw new Error(`Este correo ${email} ya Existe`);
      }
    }

    const existeUserById = async( id ) =>{

        const existeId = await Usuario.findById( id ); 
        if(!existeId){
           throw new Error(`Este Id ${id} no Existe en la base de datos`);
          }
        }

export {
    isRoleValid,
    emailExiste,
    existeUserById
}