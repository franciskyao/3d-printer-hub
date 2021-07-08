const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const axios = require("axios");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const urlParams = new URLSearchParams(url.search);
  const searchQuery = urlParams.get('search');
  console.log(`https://api.thingiverse.com/search/${searchQuery}?access_token=${process.env.THING_TOKEN}`)
  axios.get(`https://api.thingiverse.com/search/${searchQuery}?access_token=${process.env.THING_TOKEN}`)
    .then((success) => {
      res.send(success.data)
    })
    .catch((err) => {
      console.log('failed to query')
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})