const app = require('./app')
const supertest = require('supertest')
const request = supertest(app)

describe("Test endpoints", () => {
  test('Debe devolver "Books"', async () => {
    const response = request.get('/books')
    const body = JSON.parse(response.text)
    expect(response.status).toBe(200)
    expect(body.msg).toBe('Books')
  })
  test('Debe devolver "Authors"', async () => {
    const response = request.get('/authors')
    const body = JSON.parse(response.text)
    expect(response.status).toBe(200)
    expect(body.msg).toBe('Authors')
  })
  test('Debe devolver error', async () => {
    const response = request.get('/any-route')
    const body = JSON.parse(response.text)
    expect(response.status).toBe(404)
    expect(body.msg).toBe('Not Found')
  })
})