const exp = require('express');
const adminApp = exp.Router();
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyToken = require('../middlewares/verifyToken');


let adminsCollection;
let bookingsCollection
let usersCollection
let hallsCollection

// get user collection object
adminApp.use((req, res, next) => {
    usersCollection = req.app.get('usersCollection')
    adminsCollection = req.app.get('adminsCollection');
    bookingsCollection = req.app.get('bookingsCollection')
    hallsCollection = req.app.get('hallsCollection')
    next();
});

// admin login
adminApp.post('/login', expressAsyncHandler(async (req, res) => {
    // get user credentials from client
    const adminCred = req.body;
    // check for username
    const dbAdmin = await adminsCollection.findOne({ username: adminCred.username });
    // console.log(dbAdmin)
    if (dbAdmin === null) {
        res.send({ message: "Invalid username" });
    } else {
        // check for password
        if (dbAdmin.password !== adminCred.password) {
            res.send({ message: "Invalid password" });
        } else {
            // create jwt token and encode it
            const signedToken = jwt.sign({ username: dbAdmin.username }, process.env.SECRET_KEY, { expiresIn: '1d' });
            // send res
            res.send({ message: "Login success", token: signedToken, user: dbAdmin });
        }
    }
}));

module.exports = adminApp;