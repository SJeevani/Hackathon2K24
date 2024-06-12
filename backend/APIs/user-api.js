// create user-api app
const exp = require('express')
const userApp = exp.Router()
const bcryptjs = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken = require('../middlewares/verifyToken')

let usersCollection
let bookingsCollection
let hallsCollection
// get user collection object
userApp.use((req, res, next) => {
    usersCollection = req.app.get('usersCollection')
    bookingsCollection = req.app.get('bookingsCollection')
    hallsCollection = req.app.get('hallsCollection')
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
        if (dbUser.email !== userCred.email) {
            res.send({ message: "Invalid email" });
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
    }
}));

// get all campus halls
userApp.get('/allHalls',verifyToken,expressAsyncHandler(async(req,res)=>{
    const halls=await hallsCollection.find().toArray()
    // console.log(halls)
    res.send({message:"all campus halls",payload:halls})
}))

userApp.post('/book-seminar-hall',verifyToken,expressAsyncHandler(async(req,res)=>{
    const bookCred=req.body;
    bookCred.status='pending'
    await bookingsCollection.insertOne(bookCred)
    res.send({message:"Booking Successful"})
}))

userApp.get('/allBookings/:username',verifyToken,expressAsyncHandler(async(req,res)=>{
    const username=req.params.username
    const bookings=await bookingsCollection.find({name:username}).toArray()
    res.send({message:"user bookings",payload:bookings})
}))

// userApp.get('/get-booked-dates',verifyToken, async (req, res) => {
//     try {
//         const bookedDates = await Booking.find({ status: 'Accepted' }).select('date -_id');
//         res.json({ bookedDates: bookedDates.map(date => date.toISOString().split('T')[0]) });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching booked dates", error });
//     }
// });

userApp.get('/accepted-bookings', verifyToken, expressAsyncHandler(async (req, res) => {
    try {
        const acceptedBookings = await bookingsCollection.find({ status: 'Accepted' }).toArray();
        res.send({ message: "Accepted bookings", payload: acceptedBookings });
    } catch (error) {
        res.status(500).send({ message: "Error fetching accepted bookings", error });
    }
}));




// export user  App
module.exports = userApp