
import request from 'supertest';
import app from '../app.js';


async function getToken() {
  const payload = {
    'email': 'test@email.com',
    'password': '12345689'
  }
  const { body } = await request(app).post('/auth/login').send(payload);
  return body.accessToken;
}

export default getToken;
