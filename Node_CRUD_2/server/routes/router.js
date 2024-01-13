const express = require('express')
const route = express.Router()

const services = require('../services/render')



route.get('/',services.homeRoutes);

route.get('/add-user',services.addUser);
  
route.get('/update-user',services.updateUser);

module.exports=route