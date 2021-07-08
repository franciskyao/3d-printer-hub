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
  const page = urlParams.get('page');

  axios.get(`https://api.thingiverse.com/search/${searchQuery}/`, {
    params: {
      access_token: process.env.THING_TOKEN,
      sort: 'relevant',
      page: page
    }
  })
    .then((success) => {
      res.send(success.data)
    })
    .catch((err) => {
      console.log('failed to query')
    })
})

app.post('/update', (req, res) => {
  console.log(req.body)
  // console.log({name, public_url, preview_image, category})

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})