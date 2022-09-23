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
    const { data } = body;
    console.log(data);
    expect(status).to.equal(201);
  });
});