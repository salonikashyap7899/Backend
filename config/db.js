const mongoose = require("mongoose")

const connectDatabase = async ()=>{
    mongoose.connect(process.env.mongo_url)
    .then((conn)=>{
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log( err.message)
        process.exit(1)
        
    
    })

}

module.exports = connectDatabase

