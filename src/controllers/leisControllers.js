const mongoose = require('mongoose');
const Lgbtqia = require('../models/lgbtqiaSchema')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getAll = async (req, res) => {
  const diversidade = await Lgbtqia.find() 
    res.status(200).json(diversidade)
}


const createLei = async (req, res) => {
  // const authHeader = req.get('authorization')
  // const token = authHeader.split(' ')[1]
  // if(authHeader == undefined){
  //   return res.status(403).send({message: "Por gentileza informar autorização"})
  // }
  // jwt.verify(token, SECRET, async (err) => {
  //   if(err){
  //     res.status(403).send({message: "token inválido", err})
  //   }
  // const lei = await Lgbtqia.find()
  // })

  const lgbtqia = new Lgbtqia({

    _id: new mongoose.Types.ObjectId(), 
  num_lei: req.body.num_lei,
  tema: req.body.tema,
  descricao: req.body.descricao,
  })
  try {
    const newLei = await lgbtqia.save()
    res.status(201).json(newLei)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
};

const getById = async (req, res) => {
  try {
      const lgbtqia = await lgbtqiaSchema.findById(req.params.id)
      if(lgbtqia == null) {
          return res.status(404).json({message: 'Atenção, essa lei ainda não foi cadastrada!'})
      }
      res.json(lgbtqia)
  } catch (err) {
      res.status(500).json({ message: err.message })

  }
};

const updateLei = async (req, res) => {
  try {
      const lgbtqia = await lgbtqiaSchema.findById(req.params.id)
      if(lgbtqia == null) {
          return res.status(404).json({message: 'Atenção, essa lei ainda não foi cadastrada!'})
      }
      
      if (req.body.num_lei != null) {
          lgbtqia.num_lei = req.body.num_lei
      }
      if (req.body.tema != null) {
          lgbtqia.tema = req.body.tema
      }
      if (req.body.descricao != null) {
          lgbtqia.descricao = req.body.descricao
      }
      
      const atualizaLei = await lgbtqia.save()
      res.json(atualizaLei)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
};

const deleteLei = async (req, res) => {
  // const authHeader = req.get('authorization')
  // const token = authHeader.split(' ')[1]
  // if(authHeader == undefined){
  //   return res.status(403).send({message: "Por gentileza informar autorização"})
  // }
  // jwt.verify(token, SECRET, async (err) => {
  //   if(err){
  //     res.status(403).send({message: "token inválido", err})
  //   }
  //   const lei = await Lgbtqia.find()
  // })
  try{
    const lgbtqia = await lgbtqiaSchema.findById(req.params.id)
    if(lgbtqia == null){
      return res.status(404).json({message: 'Atenção, essa lei não foi encontrada!'})
    }

    await lgbtqia.remove()
    res.status(200).json({message: 'Lei removida com sucesso!'})

  } catch(err){
    res.status(500).json({message:err.message})
  }
};

module.exports = {
    getAll,
    createLei,
    getById,
    updateLei,
    deleteLei
}