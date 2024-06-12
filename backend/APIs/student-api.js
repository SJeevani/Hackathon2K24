// create user-api app
const exp = require('express')
const studentApp = exp.Router()
const bcryptjs = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = require('../middlewares/verifyToken')

let studentsCollection
let bookingsCollection
// get user collection object
studentApp.use((req, res, next) => {
    studentsCollection = req.app.get('studentsCollection')
    bookingsCollection = req.app.get('bookingsCollection')
    next()
})

// user registration route
studentApp.post('/student', expressAsyncHandler(async (req, res) => {
    // get user resource from client
    const newStudent = req.body
    // add usertype as user
    newStudent.userType = "student"
    // check for duplicate users based on username
    const dbStudent = await studentsCollection.findOne({ username: newStudent.username })
    // if user found in db
    if (dbStudent !== null) {
        res.send({ message: "Student already exists" })
    }
    else {
        // hash paasword
        const hashedPassword = await bcryptjs.hash(newStudent.password, 5)
        // replace plain password with hashed password
        newStudent.password = hashedPassword
        // create new user
        await studentsCollection.insertOne(newStudent)
        // send repsonse
        res.send({ message: "New student created" })
    }
}))


// user login
studentApp.post('/login', expressAsyncHandler(async (req, res) => {
    // get user credentails from client
    const userCred = req.body
    // check for username
    const dbStudent = await studentsCollection.findOne({ username: userCred.username })
    if (dbStudent === null) {
        res.send({ message: "Invalid username" })
    } else {
        // check for password
        if (dbStudent.email !== userCred.email) {
            res.send({ message: "Invalid email" })
        } else {
            const status = await bcryptjs.compare(userCred.password, dbStudent.password)
            if (status === false) {
                res.send({ message: "Invalid password" })
            } else {
                // create jwt token and encode it
                const signedToken = jwt.sign({ username: dbStudent.username }, process.env.SECRET_KEY, { expiresIn: '1d' })
                // send res
                res.send({ message: "Login success", token: signedToken, user: dbStudent })
            }
        }
    }
}))

// export user  App
module.exports = studentApp