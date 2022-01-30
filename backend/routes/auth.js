const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'YashP@lod';

// create a user using: POST "/api/auth/createuser". no login required
router.post('/createuser', [
    body('name', 'Enter Valid Name').isLength({ min: 3 }),
    body('email', 'Enter Valid Email').isEmail(),
    body('password', 'Password must be atleast 5 character long').isLength({ min: 5 })
], async (req, res) => {
    // if there is any error return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    // check whether the user with the same email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry User with same email already exists" })
        }

        // encrypting password using bcryptjs
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        //res.json(user);
        res.json({ authtoken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Authenticate a user using: POST "/api/auth/login"
router.post('/login', [
    body('email', 'Enter Valid Email').isEmail(),
    body('password', 'Password cannot be blanked').exists()
], async (req, res) => {
    // if there is any error return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user =await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router