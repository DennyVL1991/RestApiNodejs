const {response} = require('express');

const usuariosGet = (req, res=response) => {
    res.json({
        msg:' Methode GET'
    });
  }

const usuarioPost = (req, res) => {
    res.json({
        msg:' Methode POST'
    });
  }


const usuarioPut = (req, res) => {
    res.json({
        msg:' Methode PUT'
    });
  }

const usuarioPatch = (req, res) => {
    res.json({
        msg:' Methode PATCH'
    });
  }


const usuarioDelete = (req, res) => {
    res.json({
        msg:' Methode DELETE'
    });
  }



  module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
  }