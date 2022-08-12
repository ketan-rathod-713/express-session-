const MongoStore = require('connect-mongo')
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)

const app = express()

const dbString = "mongodb://localhost:27017/tutorial_db"

const dbOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(dbString,dbOptions)

const sessionStore = new MongoStore({ // To store the session data in mongoDB/Database rather then in memory 
    mongoUrl: dbString,
})

app.use(session({
    secret:"This is a secret",
    resave: false, 
    saveUninitialized: true,
    store: sessionStore,
    cookie:{
        maxAge: 1000 // 1 day
    }
})) 
// what it will do is that it will put session id in the res header, and then when once again i do reload then my browser will send that cookie to the server using cookie req header 
// To see it in effect inspect web page and see application->cookie and also Network-> see req. res. headers value of cookie and set-cookie
// First time the server will check if there any cookie, if not then it will set cookie
// if next time there is cookie in req. header then server will not do anything, just update the session may be not ??
// we can add any value to our session and store in in database
// Like here visitsCount is added 

app.get('/',(req,res)=>{
    console.log(req.session)
    if(req.session.visitsCount){
        req.session.visitsCount++;
    } else {
        req.session.visitsCount = 1;
    }
    res.send(`<h1> You have visited this site ${req.session.visitsCount} times</h1>`);
})



app.listen(80,()=>{
console.log('server is listening on port 3000 ');
})