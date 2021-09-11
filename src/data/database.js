require('dotenv').config();
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:50000/mao-dadas'

const connect = () => {mongoose.connect(MONGODB_URL, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(console.log('Database conectada com sucesso!'))
.catch(err => console.err)
}

module.exports = {connect}