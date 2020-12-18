
const request = require('supertest');
const server = require('./api/server');
const db = require("./data/dbconfig");

const newResource = { name: "new resource" };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  
});
beforeEach(async () => {
  await db('resource').truncate()
  await db.seed.run();
})
afterAll(async () => {
  await db.destroy();
})

describe('server.js', () => {
  describe('create route', () => {
    it('should return an OK status code from the create route', async () => {
      const expectedStatusCode = 201;
      const res = await request(server).post("/resource").send(newResource);
      expect(res.status).toBe(expectedStatusCode);
    });

      it('should return a JSON object from the create route', async () => {
        const response = await request(server).post('/resource').send(newResource);
        expect(response.type).toEqual('application/json');
      });

      it('should return the object created from the create route', async () => {
        const response = await request(server).post('/resource').send(newResource);

        expect(response.body).toEqual({...newResource, id: 4});
      });
  });
  describe('delete route', () => {
    it('should return an OK status code from the delete route', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).delete('/resource/1');

      expect(response.status).toEqual(expectedStatusCode);
    });

    it('should return a number from the delete route', async () => {
      const response = await request(server).delete('/resource/1');
      expect(response.type).toEqual('application/json');
    });

    it('should return the number of items deleted from the delete route', async () => {
      const expectedBody = 1;
      const response = await request(server).delete('/resource/1');
      console.log(response.body)
      expect(response.body).toEqual(expectedBody);
    });
  });
});
