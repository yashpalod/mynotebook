const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// create a user using: POST "/api/auth/". Doesn't require auth 
router.post('/', [
    body('name', 'Enter Valid Name').isLength({ min: 3 }),
    body('email', 'Enter Valid Email').isEmail(),
    body('password', 'Password must be atleast 5 character long').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.email
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'Please Enter a unique value for email',message:err.message })
        });
})

module.exports = router