require('dotenv').config();
const express = require('express');

const connectToDb = require('./config/db.js')

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())


connectToDb()

const userRoutes = require('./Routers/UserRoutes.js')

app.use('/', userRoutes);

module.exports = app;
