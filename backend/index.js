const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
app.use(express.json())



const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const users = []


app.post('/register', async (request, response) => {
  const { username,number, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = {
    id:users.length,
    username,
    number,
    passwordHash,
  }

  users.push(user)


  response.status(201).json(user)
})


app.post('/login', async (request, response) => {
    console.log(request.body)
    const { username, password } = request.body
  
    const user = users.find(u=>u.username===username)

    console.log(user)


    const passwordCorrect = user === undefined
      ? false
      : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: 'invalid username or password'
      })
    }
  
    
    const userForToken = {
      username: user.username,
      id: user.id,
    }

    
  
    const token = jwt.sign(userForToken, "df")

    console.log(token)
  
    response
      .status(200)
      .send({ token, username: user.username, name: user.name })
  })

  app.get("/temp",(req,res)=>{
    console.log(req.get("authorization"))
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})