const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb connetion
        const con= await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser:true,
          

        })

        console.log(`MongoDB Connected :${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB