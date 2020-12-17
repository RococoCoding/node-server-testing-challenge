const db = require("../data/dbconfig");

module.exports = {
  addResource,
  getResourceById,
  deleteResource
}

function getResourceById(id) {
  return db('resource')
    .where({id})
}

function addResource(body) {
  return db('resource')
    .insert(body)
    .then(id => {
      return getResourceById(id);
    })
}

function deleteResource(id) {
  return db('resource')
    .where({id})
    .del()
}
