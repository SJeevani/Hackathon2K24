// create user-api app
const exp=require('express')
const userApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const verifyToken=require('../middlewares/verifyToken')

let usersCollection
let bookingsCollection
let hallsCollection
// get user collection object
userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection')
    bookingsCollection=req.app.get('bookingsCollection')
    hallsCollection=req.app.get('hallsCollection')
    next()
})

// admin login
userApp.post('/login', expressAsyncHandler(async (req, res) => {
    // get user credentials from client
    const userCred = req.body;
    // check for username
    const dbUser = await usersCollection.findOne({ username: userCred.username });
    // console.log(dbAdmin)
    if (dbUser === null) {
        res.send({ message: "Invalid username" });
    } else {
        // check for password
        if (dbUser.password !== userCred.password) {
            res.send({ message: "Invalid password" });
        } else {
            // create jwt token and encode it
            const signedToken = jwt.sign({ username: dbUser.username }, process.env.SECRET_KEY, { expiresIn: '1d' });
            // send res
            res.send({ message: "Login success", token: signedToken, user: dbUser });
        }
    }
}));


// export user  App
module.exports=userApp