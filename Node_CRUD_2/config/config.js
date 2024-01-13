import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const res= await mongoose.connect('mongodb://localhost:27017/todo-app');
        console.log("Database Connected", res.connection.port);

    } catch (error) {
        console.log('connection failed ,error');
    }
}