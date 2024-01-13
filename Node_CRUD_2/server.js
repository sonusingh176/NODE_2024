// Import the express module
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');


// Import the router from web.js
// const todoRouter = require('./routes/todoRoutes.js');

/**
 * In the Express.js framework, the express() function is a top-level
 * function exported by the module. It is the entry point for creating
 * an instance of an Express application. When you call express(),
 * it returns an Express application object, which you can use
 * to configure routes, middleware, and various settings.
 */

// Create an instance of the Express application
const app = express();

// Load environment variable from .env file into process.env
// specify the path to your .env file
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

//MONGODB CONNECTION
connectDB();

/**
 * To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
 * body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
 */

// parse request to body-parser
app.use(bodyParser.json());

/**
 * In Express.js, the use() method is responsible for setting up middleware functions and routers.
 * In Express.js, when you define routes using the Router object, you typically use the use() method to mount those routes on a specified path in your application.
 *
 * Example: app.use('prefixed ', routes);
 */

// set view engine
app.set('view engine', 'ejs');

/**
 * In Express.js, There are several methods. These are commonly used when
 * configuring and setting up an Express application.
 *
 * Example: Listen , Use , Route ,get ,post ,put ,delete
 * param , set , locals.
 */

// load assets
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
// If you're using 'path' module then __dirname is not work with ES6 module.

// app.use('/css', express.static(path.join(__dirname, 'assets/css')));

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//load routers
app.use('/',require('./server/routes/router'))

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Express server listening on port:  ${PORT}`);
});
