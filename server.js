'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const { allowCORS } = require('./middlewares/allowCORS');
require('./config/config');

const app = express();
const port = process.env.PORT;

app.use(allowCORS);

app.use(bodyParser.json());

if (!module.parent) {
  app.listen(port, () => console.log('started on port ', port));
}

module.exports = { app };
