import express from "express";

//import the named function
import {
  getAllTodos,
  getTodoById,
  createNewTodo,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todoController.js";

//In Express.js, express.Router() is a method that creates an instance of a router
const router = express.Router();

// Use the route method on the router to handle the POST request to '/new-todo'
router.route("/todos").get(getAllTodos);
router.route("/todo/:id").get(getTodoById);
router.route("/new-todo").post(createNewTodo);
router.route("/update-todo/:id").put(updateTodoById);
router.route("/delete-todo/:id").delete(deleteTodoById);

/**
 * Exporting the router using export default router; allows you to import and use the router in other files using the import statement.
 *
 * Using export default allows you to import the router with any name you prefer in other files, enhancing clarity and conciseness.
 *
 */

export default router
