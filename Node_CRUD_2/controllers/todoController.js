
import {Todo} from "../models/todoSchema.js"


// ES6 arrow function
//named export 
//Get all todos
export const getAllTodos = async(req, res,next) =>{
    try {
        // his Mongoose function is used to query the database and find all documents in the associated collection.
        const todos = await Todo.find();

        res.json({product:todos});
        // if(todos){
        //     res.status(200).json(todos);
        // }else{
        //     res.status(404).json({error :"Todos not Found"});
        // }

    } catch (error) {
        next(error);
    }

}

export const getTodoById = () =>{
    
}

export const createNewTodo = async (req,res,next) =>{
    
    const newTodo= req.body;
    try {
        //create database and table
         const createTodo = await Todo.create(newTodo);

         //send data from server  to client
         res.json({
            todo:createTodo,
         })
        
    } catch (error) {
        next(error);
        
    }


    
}

export const updateTodoById = () =>{
    
}

export const deleteTodoById = () =>{
    
}