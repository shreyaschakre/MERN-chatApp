import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectToMongoDb from './db/connectToMongodb.js';

import messageroutes from './Routes/message.routes.js'
import authroutes from './Routes/auth.routes.js'
import userroutes from './Routes/user.routes.js'


dotenv.config();
//console.log(process.env);

const app = express();
const port = process.env.PORT 


//app.get("/", (req,res) => {
    // root route http://localhost:5000/
//    res.send("Hello world")
//})

app.use(express.json())  //to parse incoming request with json payload (from req.body)
app.use(cookieParser())

app.use("/api/auth",authroutes)
app.use("/api/messages",messageroutes)
app.use("/api/users",userroutes)



app.listen(port,() => {
    connectToMongoDb()
    console.log(`server running on ${port}`);

})