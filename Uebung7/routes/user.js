const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET all users
router.get('/', async(req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});

// POST one user
router.post('/', async(req, res) => {
    const newUser = new User({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role
    })

    const user = await User.findOne({ username: newUser.username });
    console.log(user)
    if(user)
    {
        res.status(400).send({
            message: "Username already exists!"
        }).send();
    } else {
        const user = await User.findOne({ email: newUser.email });
            console.log(user)
        if(user)
        {
            res.status(400).send({
                message: "E-Mail already exists!"
            }).send();
        } else {
            await newUser.save();
            res.send(newUser);
        }
    }
});

// get one user via username
router.get('/:name', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.params.name });
        console.log(req.params);
        res.send(user);
    } catch {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
})

// update one user
router.patch('/:id', async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })

        if (req.body.username) {
            user.username = req.body.username
        }

        if (req.body.password) {
            member.password = req.body.password
        }

        if (req.body.email) {
            member.email = req.body.email
        }

        if (req.body.role) {
            member.role = req.body.role
        }

        await user.updateOne({ _id: req.params.id }, user);
        res.send(user)
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});

// delete one user via id
router.delete('/:id', async(req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});


module.exports = router;