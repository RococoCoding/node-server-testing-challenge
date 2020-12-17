const express = require("express");
const {addResource, deleteResource} = require("./models");
const server = express();

server.use(express.json());

server.post("/resource", (req, res) => {
  addResource(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      console.log(err)
    })
})

server.delete("/resource/:id", (req, res) => {
  deleteResource(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = server;
