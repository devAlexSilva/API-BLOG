require('dotenv').config();
const { json } = require('express');
const express = require('express');
const app = express();

app.use(json());


app.use('/', require('./route/postsRoute'));
app.listen(process.env.PORT);