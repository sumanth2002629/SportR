const mongoose = require('mongoose')
const supertest = require('supertest')  
const app = require('../index')

const api = supertest(app)

test("register user", async () => {
    const user = {
        username:"user9",
        number:"1234567890",
        password:"user1234"
    }

    await api
        .post("/user/register")
        .send(user)
        .expect(201)
        .expect('Content-Type', /application\/json/)
})

test("login user", async () => {
    const user = {
        username:"user8",
        password:"user1234"
    }

    await api
        .post("/user/login")
        .send(user)
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

// afterAll(done => {
//     mongoose.connection.close()
//     done()
// })