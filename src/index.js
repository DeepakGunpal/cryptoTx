const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./route/route.js'));

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => { app.listen(process.env.PORT || 4000, () => console.log(`Connected`)) });