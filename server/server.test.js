const request = require('supertest');
const app = require('./server.js');

describe('Server Test', () => {
  test('Responds with 200 and GET method', async () => {
    const { status } = await request(app).get('/');
    expect(status).toBe(200);
  });

  test('Response is a 5-letter word', async () => {
    const { text } = await request(app).get('/');
    expect(text.length).toBe(5);
  });
});
