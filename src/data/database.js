require('dotenv').config();
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/maosdadas';

const connect = () => {mongoose.connect("mongodb+srv://admin:admin@maosdadas.zn4w4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(console.log('Database conectada com sucesso!'))
.catch(err => console.err)
}

module.exports = {connect}