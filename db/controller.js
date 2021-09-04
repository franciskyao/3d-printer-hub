const { Pool } = require('pg')
require('dotenv').config();

const pool = new Pool ({
  user: `${process.env.PGuser}`,
  password: `${process.env.PGpassword}`,
  host: `${process.env.PGhost}`,
  database: `${process.env.PGdatabase}`,
  port: 5432,
})

const getAll = function(req, res) {
  pool.query('SELECT * FROM projects3d')
    .then((success) => res.send(success))
    .catch((err) => {
      console.log('Failed to retrieve projects');
      res.end();
    })
}

const addProject = function(req, res) {
  const {name: proj_name, public_url, preview_image, category} = req.body;
  const query = `INSERT INTO projects3d (proj_name, public_url, preview_image, category) VALUES ('${proj_name}', '${public_url}', '${preview_image}', '${category}') ON CONFLICT (proj_name) DO NOTHING`;
  pool.query(query)
    .then((success) => console.log('Successfully added project to table'))
    .catch((err) => console.log('Failed to add project to table'))
  res.end('')
}

const removeProject = function(id, res) {
  pool.query(`DELETE FROM projectParts WHERE project_id = ${id}; DELETE FROM projects3d WHERE id = ${id}`)
    .then((success) => console.log('Successfully deleted project and parts'))
    .catch((err) => console.log(`Failed to delete parts of project ${id}`))
  res.end('')
}

const getProjectParts = function(id, res) {
  pool.query(`SELECT * FROM projectParts WHERE project_id = ${id}`)
    .then((success) => res.send(success))
    .catch((err) => console.log(`Failed to get parts of project ${id}`))
}

const removeAPart = function(partId, res) {
  pool.query(`DELETE FROM projectParts WHERE id = ${partId}`)
    .then((success) => res.send(success))
    .catch((err) => console.log(`Failed to delete parts of project ${partId}`))
}

const addAPart = function(projectId, part_name, part_available, part_needed, part_complete, res) {
  pool.query(`INSERT INTO projectParts (project_id, part_name, part_available, part_needed, part_complete)
  VALUES (${projectId}, '${part_name}', ${part_available} , ${part_needed}, ${part_complete})`)
    .then((success) => {
      console.log(`Successfully added ${part_name}`)
      res.send(success)
    })
    .catch((err) => console.log('Failed to add part of project'))
}

const editAPart = function(partId, part_name, part_available, part_needed, part_complete, res) {
  console.log(`UPDATE projectParts SET part_name = '${part_name}', part_available = ${part_available}, part_needed = ${part_needed}, part_complete = ${part_complete}
  WHERE id = ${partId}`)

  pool.query(`UPDATE projectParts SET part_name = '${part_name}', part_available = ${part_available}, part_needed = ${part_needed}, part_complete = ${part_complete}
  WHERE id = ${partId}`)
    .then((success) => {
      console.log(`Successfully edited ${part_name}`);
      res.send(success)
    })
    .catch((err) => console.log('Failed to edit part: ', part_name))
}

module.exports.getAll = getAll;
module.exports.addProject = addProject;
module.exports.removeProject = removeProject;
module.exports.getProjectParts = getProjectParts;
module.exports.removeAPart = removeAPart;
module.exports.addAPart = addAPart;
module.exports.editAPart = editAPart;