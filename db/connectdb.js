const mongoose  =require('mongoose')




const connectDB =()=>{
    //For Local DB
    return mongoose.connect(process.env.LIVE_URL)


   // for cloud DB 
    //return mongoose.connect(database)

    .then(()=>{
        console.log("Connected Successfully")
    })
    
    .catch((error)=>{
        console.log(error)
    })
}

module.exports =connectDB