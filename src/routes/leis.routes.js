const express = require('express');
const router = express.Router();
const controller = require('../controllers/leisControllers');

router.get('/leis', controller.getAll);
router.get('/:id', controller.getById);
router.post('/registrar', controller.createLei);
router.patch('/atualizar/:id', controller.updateLei);
router.delete('/delete/:id', controller.deleteLei);

//router.get('/Hello', (req, res)=>{
  //  res.status(200).send({'msg':'Deu tudo certo!'})
//});

module.exports = router