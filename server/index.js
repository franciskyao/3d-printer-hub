const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const axios = require("axios");
const pgMethods = require('../db/controller')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/getmodels', (req, res) => {
  pgMethods.getAll(req, res)
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

app.post('/addproject', (req, res) => {
  pgMethods.addProject(req, res);
})

app.delete('/removeProject', (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const urlParams = new URLSearchParams(url.search);
  const id = urlParams.get('id');
  pgMethods.removeProject(id, res);
})

app.get('/getPartsOfProject', (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const urlParams = new URLSearchParams(url.search);
  const projectId = urlParams.get('id');
  pgMethods.getProjectParts(projectId, res);
})

app.delete('/removeAPart', (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const urlParams = new URLSearchParams(url.search);
  const id = urlParams.get('id');
  pgMethods.removeAPart(id, res);
})

app.get('/addAPart', (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const urlParams = new URLSearchParams(url.search);
  const projectId = urlParams.get('projectId');
  const part_name = urlParams.get('newPartName');
  const part_available = urlParams.get('newPartAvailable');
  const part_needed = urlParams.get('newPartNeeded');
  const part_complete = urlParams.get('newPartComplete');
  console.log({projectId, part_name, part_available, part_needed, part_complete})
  pgMethods.addAPart(projectId, part_name, part_available, part_needed, part_complete, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})