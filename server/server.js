'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true });
app.use(cors());

const authCheck = jwt({
  secret: 'AUTH0_CLIENT_SECRET',
  audience: 'AUTH0_CLIENT_ID'
});

app.listen(3333);
console.log('listening on localhost:3333');
