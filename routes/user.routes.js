
import { Router } from 'express';
import { check } from 'express-validator';

import { usuariosGet, usuarioPost, usuarioPut, usuarioDelete, usuarioPatch } from '../controllers/user.controler.js';
import { emailExiste, existeUserById, isRoleValid } from '../helpers/dbValidators.js';
import { validarCampos } from '../middlewares/validarCampos.js';


const router = Router();

 router.get('/usuarios', usuariosGet);

  router.post('/usuarios',[
    check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mayor de 8 caracteres').isLength({min:8}),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExiste ),
    check('role').custom( isRoleValid ),
    validarCampos
  ], usuarioPost );

  router.put('/usuarios/:id', [
    check('id','Este id no es valido').isMongoId(),
    check('id').custom( existeUserById ),
    validarCampos
  ], usuarioPut );

  router.delete('/usuarios/:id', [
    check('id','Este id no es valido').isMongoId(),
    check('id').custom( existeUserById ),
    validarCampos
  ] ,usuarioDelete);

  router.patch('/usuarios', usuarioPatch);




export  {
   router
}