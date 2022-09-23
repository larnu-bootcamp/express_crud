import supertest from 'supertest';
import app from '../app.js';


describe('Test the rest api', () => {
  it('should return an array', async () => {
    const payload = {
      'name': 'test',
      'email': 'jose@email.com',
      'password': '123456'
    }
    const res = await supertest(app).get('schools');

    expect(res.statusCode).toBe(200);
  });
});