const express = require('express');
const path = require('path')
const log = require('util').log;
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/api/api-relay').post((req, res) => {
  const headers = {
    Accept: "application/json",
    app_id: process.env.app_id,
    app_key: process.env.app_key
  };

  fetch(`${process.env.baseUrl}${req.body.word}`, {
    method: "GET",
    headers
  })
  .then(response => response.json())
  .then(json => {
    res.send(json)
  })
  .catch(error => res.send(error));
});

app.use(express.static(path.resolve('./dist/vocab')));
app.get('*', (req, res) => {
  res.sendFile(path.join('./dist/vocab/index.html'));
});

app.listen(process.env.PORT || 8080);
log('served up on port 8080')
