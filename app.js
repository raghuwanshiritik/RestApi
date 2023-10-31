const express =require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web =require('./Routes/web')
const connectdb =require('./db/connectdb')
const fileUpload = require("express-fileupload");
var cors =require('cors')



app.use(cors())  //for api communication

//for file uplode
app.use(fileUpload({useTempFiles: true}));



//for data get in api
app.use(express.json())


connectdb()

//load route
app.use('/api',web)
//localhost:4000/api











//server create
app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost: ${process.env.PORT}`)
})