const express = require("express");
const cors = require ('cors')
const database = require ('./data/database')
const app = express();
const lgbtqia = require("./routes/leis.routes");

database.connect();
app.use(express.json());

app.use(cors());
app.use("/lgbtqia", lgbtqia);


module.exports = app;