const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller =require('../controller/userController')

route.get('/',services.homeRoutes);

route.get('/add-user',services.addUser);
  
route.get('/update-user',services.updateUser);

//API
route.post('/api/users',controller.create )


module.exports=route