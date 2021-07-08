const { Pool } = require('pg')
require('dotenv').config();

const pool = new Pool ({
  user: `${process.env.PGuser}`,
  password: `${process.env.PGpassword}`,
  host: `${process.env.PGhost}`,
  database: `${process.env.PGdatabase}`,
  port: 5432,
})

const getList = function(req, res) {

}

const addProject = function(req, res) {
  const {name: proj_name, public_url, preview_image, category} = req.body;
  const query = `INSERT INTO projects3d (proj_name, public_url, preview_image, category) VALUES ('${proj_name}', '${public_url}', '${preview_image}', '${category}') ON CONFLICT (proj_name) DO NOTHING`;
  console.log(query)
  pool.query(query)
    .then((success) => console.log('Successfully added project to table'))
    .catch((err) => console.log('Failed to add project to table'))
  res.end('')
}

const removeProject = function(req, res) {

}

module.exports.getList = getList;
module.exports.addProject = addProject;
module.exports.removeProject = removeProject;