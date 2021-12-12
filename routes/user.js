const express = require('express');
const router = express.Router();
const UserModel = require('./model/User.Model');
const auth_middleware = require('./auth_middleware.js')


//Find user by username
router.get('/need/:username', function(req, res) {
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
    console.log(request.session.username);
    const username = request.session.username;
    return response.send(username);
});

//Register account, insert user 
router.post('/register', function(req, res) {
    const {username, password, verifyPassword} = req.body;
    console.log(req.body);
    if(!username || !password || !verifyPassword) {
        return res.status(422).send("Missing username or password");
    }

    // if(UserModel.findUserByUsername(username)) {
    //     res.status(422).send("The username is registered already. Please pick another one");
    //     console.log("Registered, pick another");
    // }
    
    if(password !== verifyPassword) {
        res.status(422).send("Password verification does not match");
        console.log("Does not match");
    }

    return UserModel.insertUser({username:username, password:password})
        .then((userResponse) => {
            req.session.username = username;
            console.log(userResponse);
            return res.status(200).send(username);   
        })
        .catch(error => res.status(400).send(error));
});

//Log in account, authenticate password
router.post('/login', function (req, res) {
    let {username, password} = req.body;
    // password = JSON.stringify(password);
    if(!username || !password) {
        return res.status(422).send("Must include both username and password");
    }

    return UserModel.findUserByUsername(username)
        .then((userResponse) => {
            console.log(userResponse)
            if(!userResponse) {
                return res.status(405).send("No user found with that name");
            }
            if (userResponse.password === password) {
                req.session.username = username;
                return res.status(200).send({username});
            } else {
                return res.status(404).send("No user found with that password");
           
            }

        })
        .catch((error) => console.error(`Something went wrong: ${error}`));

});

//Logout user
router.post('/logout', function(req, res) {
    req.session.destroy()
    return res.send("Logged out");
})

//Disable cookie after log out
// router.post("/logout&", function(req, res) {
//     req.session.destroy;
//     res.send("Logged out");

// });


module.exports = router