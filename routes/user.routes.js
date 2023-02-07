
const { Router } = require('express');

const { usuariosGet, usuarioPost, usuarioPut, usuarioDelete, usuarioPatch } = require('../controllers/user.controler');

const router = Router();

 router.get('/api/usuarios/', usuariosGet);

  router.post('/', usuarioPost );

  router.put('/', usuarioPut );

  router.delete('/', usuarioDelete);

  router.patch('/', usuarioPatch);




module.exports = router;