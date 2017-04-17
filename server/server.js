'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const authCheck = jwt({
  secret: process.env.AUTH0_CLIENT_SECRET,
  audience: process.env.AUTH0_CLIENT_ID
});

app.get('/api/data', (req, res) => {
  let demoData = [
    {
      id: 1,
      city: "Miami"
    },
    {
      id: 2,
      city: "New York City"
    },
    {
      id: 3,
      city: "San Francisco"
    },
    {
      id: 4,
      city: "Tokyo"
    },
    {
      id: 5,
      city: "Los Angeles"
    }
  ];
  res.json(demoData);
});

app.listen(3333);
console.log('listening on localhost:3333');
