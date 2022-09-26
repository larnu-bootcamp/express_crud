import request from 'supertest';
import chai from 'chai';
import app from '../app.js';

const { expect } = chai;


describe('Test the auth endpoints', () => {

  it('should allow to create users', async () => {
    const payload = {
      'name': 'teast',
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app).post('/auth/register').send(payload);
    console.log(body);
    expect(status).to.equal(201);
  });

  it('should allow to login', async () => {
    const payload = {
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    console.log(body);
    expect(status).to.equal(200);
  });
});