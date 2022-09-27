import request from 'supertest';
import app from '../app.js';

before(async () => {  
  // create user
  const payload = {
    'name': 'teast',
    'email': 'test@email.com',
    'password': '12345689'
  }
  await request(app).post('/auth/register').send(payload);
})