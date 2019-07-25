const express = require('express');
const router = express.Router();

//Item Model 
const User =require('../../models/Users');

//@router GET api/items
//@desc Get All items
//@access Public

router.get('/', (req,res)=>{
    User.find()
    .sort({date:-1})
    .then(user=>res.json(user))
});


//@router POST api/items
//@desc create A post 
//@access Public

router.post('/', (req,res)=>{
    
    const newUser = new User({
        name: req.body.name,
        University: req.body.University,
        Major: req.body.Major,
        file: req.body.file
        
    });

    newUser.save().then(user=>res.json(user));
});

module.exports= router;