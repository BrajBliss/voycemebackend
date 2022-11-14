// import express from 'express';
const express = require('express');
const docs = require('./docs');
const swaggerUi = require('swagger-ui-express');
const db = require('./queries');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

app.get('/', db.getAllUsers);
app.post('/register', db.addNewUser);
app.get('/checkbalance/:id', db.checkBalance);
app.put('/transfer/:id', db.transferCoins);
app.put('/addcoins/:id', db.addCoins);

app.listen(3030, () => console.log('server is up and running'));

module.exports = app;
