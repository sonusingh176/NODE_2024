const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb connetion
        const con= await mongoose.connect(process.env.MONGO_URI ,{


        })

        console.log(`MongoDB Connected :${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB