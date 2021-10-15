
    const express = require('express');
    const router = express.Router();

    const users = require("../controllers/user.controller.js");
    
  

    router.post("/signup", users.create);
    router.post("/login", users.login);
    // Retrieve all Tutorials
    // router.get("/", users.findAll);
  
  
  
    
    module.exports = router;  