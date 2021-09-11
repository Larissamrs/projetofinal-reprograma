const mongoose = require('mongoose');

const lgbtqiaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  num_lei: {type: String, required: true},
  tema: {type: String, required: true},
  descricao: {type: String, required: true}
});

module.exports = mongoose.model('lgbtqia', lgbtqiaSchema)