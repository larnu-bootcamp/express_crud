import request from 'supertest';
import chai from 'chai';
import app from '../app.js';
import User from '../models/user.js';
import getToken from './utils.js';
import School from '../models/school.js';
import { before } from 'mocha';

const { expect } = chai;


describe('Test the school endpoints', () => {
  let token;
  let school1;
  let school2;

  before( async () => {
    token = await getToken();
    school1 = await School.create({
      name: 'test',
    })
    school2 = await School.create({
      name: 'test2',
    })
  })

  it('should retrieve all the schools', async () => {
    const { body, status } = await request(app)
      .get('/schools')
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('array');
    expect(body.length).to.equal(2);
  });

  it('get /schools should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get('/schools')
    expect(status).to.equal(403);
  });

  it('should retrieve a school by id', async () => {
    const { body, status } = await request(app)
      .get(`/schools/${school1.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    expect(body.id).to.equal(school1.id);
    expect(body.name).to.equal(school1.name);
  });

  it('get /schools/id should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get(`/schools/${school1.id}`);
    expect(status).to.equal(403);
  });

  it('put /schools/id should allow to update the object', async () => {
    const payload = { 
      name: 'new name',
    }
    const { body, status } = await request(app)
      .put(`/schools/${school1.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const school = await School.findByPk(school1.id);
    expect(school.name).to.equal(payload.name);
  });

  it('post /schools should allow to create an object', async () => {
    const payload = { 
      name: 'larnu school',
    }
    const { body, status } = await request(app)
      .post('/schools')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(201);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const school = await School.findByPk(body.id);
    expect(school.name).to.equal(payload.name);
  });

  it('delete /schools/id should allow to delete an object', async () => {
    const schoolToDelete = await School.create({
      name: 'school to delete',
    });
    const { body, status } = await request(app)
      .delete(`/schools/${schoolToDelete.id}`)
      .set('Authorization', `Bearer ${token}`)
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const school = await School.findByPk(schoolToDelete.id);
    expect(school).to.equal(null);
  });

  // testear cuando se consulta un id que no existe

});