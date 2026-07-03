const express = require('express');
const cors = require('cors');

console.log('app.js is loading');

const app = express();

app.use(cors());
app.use(express.json());

console.log(typeof app);

module.exports = app;