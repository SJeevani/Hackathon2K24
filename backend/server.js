// create express app
const exp=require('express')
const cors = require('cors');
const app=exp()
require('dotenv').config()//process.env.PORT
const mongoClient=require('mongodb').MongoClient


app.use(cors()); 
// to parse the body of req
app.use(exp.json())

// connect to DB
mongoClient.connect(process.env.DB_URL)
.then(client=>{
    // get db object
    const halldb=client.db('halldb')
    // get collection object
    const adminsCollection=halldb.collection('adminsCollection')
    const usersCollection=halldb.collection('usersCollection')
    const studentsCollection=halldb.collection('studentsCollection')
    const bookingsCollection=halldb.collection('bookingsCollection')
    const hallsCollection=halldb.collection('hallsCollection')
    // share collection with express app
    app.set('adminsCollection',adminsCollection)
    app.set('usersCollection',usersCollection)
    app.set('bookingsCollection',bookingsCollection)
    app.set('studentsCollection',studentsCollection)
    app.set('hallsCollection',hallsCollection)
    // confirm db connection status
    console.log("DB connection success")
})
.catch(err=>console.log("err in db connection",err))


// import api routes
const userApp=require('./APIs/user-api')
const adminApp=require('./APIs/admin-api')
const studentApp=require('./APIs/student-api')


app.use('/user-api',userApp)
app.use('/admin-api',adminApp)
app.use('/student-api',studentApp)


// express error handler
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

// assign port number
const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`web server on port ${port}`))