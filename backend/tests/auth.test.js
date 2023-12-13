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

    try{
        await api
            .post("/user/register")
            .send(user)
            .expect(201)
            .expect('Content-Type', /application\/json/)
    }catch(e){  
        throw new Error(e);
    }
})

test("login user", async () => {
    const user = {
        username:"user9",
        password:"user1234"
    }

    try{
        await api
            .post("/user/login")
            .send(user)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    } catch(e){
        throw new Error(e);
    }
})    

// afterAll(done => {
//     mongoose.connection.close()
//     done()
// })