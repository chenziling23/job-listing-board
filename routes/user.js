const express = require('express');
const router = express.Router();
const UserModel = require('./model/User.Model');
const jwt = require('jsonwebtoken');
const auth_middleware = require('./auth_middleware.js')


//Find user by username
router.get('/:username', function(req, res) {
    const username = req.params.username;
    if (! username) {
        return res.status(422).send("Missing data");
    }

    return UserModel.findUserByUsername(username)
        .then((userResponse) => {
            if (!userResponse) {
                return res.status(404).send("User not found");
            }
            return res.status(200).send(userResponse)
        })
        .catch(error => 
            res.status(400).send("Issue getting user"));
});

//Find who is logged in
router.get('/whoIsLoggedIn', auth_middleware, function(request, response) {
    const username = request.session.username;

    return response.send(username);
});

//Register account, insert user 
router.post('/register', function(req, res) {
    const {username, password} = req.body;
    console.log(req.body);
    if(!username || !password) {
        return res.status(422).send("Missing username or password");
    }

    return UserModel.insertUser({username, password})
        .then((userResponse) => {
            console.log(userResponse);
            return res.status(200).send(userResponse);   
        })
        .catch(error => res.status(400).send(error));
});

//Log in account, authenticate password
router.post('/login', function (req, res) {
    let {username, password} = req.body;
    password = JSON.stringify(password);
    console.log(password);
    console.log(username);
    console.log(typeof username);
    if(!username || !password) {
        return res.status(422).send("Must include both username and password");
    }

    return UserModel.findUserByUsername(username)
        .then((userResponse) => {
            if(!userResponse) {
                return res.status(404).send("No user found with that name");
            }

            if (userResponse.password === password) {
                console.log(userResponse);
                const payload = {username: username};
                const token = jwt.sign(payload, "SUPER_DUPER_SECRET", {
                    expiresIn: '14d',
                });
                // req.session.username = username;
                return res.cookie('huntersCookie', token, {httpOnly: true})
                    .status(200).send({username});
            } else {
                return res.status(404).send("No user found with that password");
           
            }

        })
        .catch((error) => console.error(`Something went wrong: ${error}`));

});

//


//Disable cookie after log out
// router.post("/logout&", function(req, res) {
//     req.session.destroy;
//     res.send("Logged out");

// });


module.exports = router