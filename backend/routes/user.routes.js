
    const express = require('express');
    const router = express.Router();
    const auth = require('../middleware/auth');
    const users = require("../controllers/user.controller.js");


    router.post("/signup", users.create);
    router.post("/login", users.login);

    router.delete('/:id', auth, users.deleteUser);
    router.get('/:id', auth,  users.getOneUser)
    router.get('/' , auth, users.getAllUser);
  
    
    module.exports = router;  