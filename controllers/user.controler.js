import {response} from 'express';
import bcrypt from 'bcryptjs';

import {Usuario} from '../models/usuario.js';


const usuariosGet = async(req, res=response) => {

  const { cant=5 , star=0 } = req.query;
  const activs = {estado:true};

  const [usuarios, total] = await Promise.all([
    Usuario.find(activs)
    .skip(Number(star))
    .limit(Number(cant)),
    Usuario.countDocuments(activs)
  ]);

  res.json({
      usuarios,
      total
    });
  }

const usuarioPost = async(req, res) => {

  const { nombre , email , password , role } = req.body;
  const usuario = new Usuario({ nombre , email , password , role });

   const salt = bcrypt.genSaltSync();
   usuario.password = bcrypt.hashSync(password,salt);

   await usuario.save();

    res.json({ usuario });
  }


const usuarioPut = async(req, res) => {

  const { id } = req.params;
  const { password , email, google , ...rest} = req.body;

  if(password){
  const salt = bcrypt.genSaltSync();
  rest.password = bcrypt.hashSync( password , salt );
  }

  const usuario = await Usuario.findByIdAndUpdate( id , rest );

    res.json({ usuario });
  }

const usuarioPatch = (req, res) => {
    res.json({
        msg:' Methode PATCH'
    });
  }


const usuarioDelete = async (req, res) => {

  const { id } = req.params;
  const usuario = await Usuario.findByIdAndUpdate( id, {estado:false} );

    res.json({ usuario });
  }



  export  {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
  }