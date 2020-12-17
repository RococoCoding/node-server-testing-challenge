
const request = require('supertest');
const server = require('./api/server');
const db = require("./data/dbconfig");
// const models = require("./api/models");

describe('server.js', () => {
  // beforeEach(async () => {
  //   await db('resource').truncate();
  // });

  describe('create route', () => {
    it('should return an OK status code from the create route', async () => {
      const expectedStatusCode = 201;
      const response = await request(server).post('/resource', {name: "resource 1"});

      expect(response.status).toEqual(expectedStatusCode);
    });

  //   it('should return a JSON object from the create route', async () => {
  //     const response = await request(server).post('/resource', {name: "resource 1"});

  //     expect(response.type).toEqual('application/json');
  //   });

  //   it('should return the object created from the create route', async () => {
  //     const expectedBody = { id: 1, name: 'running' };
  //     const response = await request(server).post('/resource', {name: "resource 1"});

  //     expect(response.body).toEqual(expectedBody);
  //   });
  });
  // describe('delete route', () => {
  //   it('should return an OK status code from the delete route', async () => {
  //     const expectedStatusCode = 200;
  //     const response = await request(server).delete('/resource');

  //     expect(response.status).toEqual(expectedStatusCode);
  //   });

  //   it('should return a number from the delete route', async () => {
  //     const response = await request(server).delete('/resource');
  //     console.log(response.type);
  //     expect(response.type).toEqual('number');
  //   });

  //   it('should return the number of items deleted from the delete route', async () => {
  //     const expectedBody = 1;
  //     const response = await request(server).delete('/resource');

  //     expect(response.body).toEqual(expectedBody);
  //   });
  // });
});
