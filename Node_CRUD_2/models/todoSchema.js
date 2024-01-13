import mongoose from "mongoose";

/**
 * If you're working with a database and using a library like Mongoose for MongoDB, 
 * you might define a todo schema using the Schema class provided by Mongoose.
 * 
 * In Mongoose, a schema is a blueprint that defines the structure of documents (data objects) 
 * within a MongoDB collection.
 *
 *  // Define a Mongoose schema 
 *      1.> new mongoose.Schema()
 *      2.> Using destructuring  ->const { Schema } = mongoose;
 * 
 */

const { Schema } =mongoose; // Destructure the 'Schema' constructor from the 'mongoose' object

// Define a Mongoose schema
const todoSchema= new Schema({
    title:{
        required:[true,'provide Model'],
        type:String
    },
    description: {
        required:[true,'Please Provide the name'],
        type: String,
        maxLength:[50, 'description should have atleast 50 character'],
        minLength:[8, 'description should have atleast 30 character']
      },
      completed: {
        type: Boolean,
        default: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

})

/**
 * mongoose.model('Todo' ,todoSchema) is a method provided by Mongoose to create a model for MongoDB collections.
 * The first argument ('Todo') is the name of the collection, and the second argument (todoSchema) is the schema that defines the structure of the documents in that collection.
 */

export const Todo = mongoose.model('Todo', todoSchema);
/**
 * As we know, model schema is consume in controller so we need to import this model in controller.
 */
