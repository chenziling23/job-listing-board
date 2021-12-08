const express = require('express');
const router = express.Router();
const JobModel = require('./model/Job.Model');
const jwt = require('jsonwebtoken');
const auth_middleware = require('./auth_middleware.js');
const { UserSchema } = require('./schema/User.Schema');


router.get('/', function(req, res) {
    JobModel.getAllJobs()
        .then((jobResponse) => {
            res.status(200).send(jobResponse)
        })
        .catch(error => res.status(400).send(error))
})

//Find job by title/company/location/description/...
router.get('/:keyword', function(req, res) {
    const keyword = req.params.keyword;
    if (! keyword) {
        return res.status(422).send("Please type keyword");
    }

    return JobModel.findJobByKeyword(keyword)
        .then((jobResponse) => {
            if (!jobResponse){
                return res.status(404).send("Not found related jobs");
            }
            return res.status(200).send(jobResponse);
        })
        .catch(error => res.status(500).send("Issue getting jobs"));
})

//Add jobs
router.post('/add', function(req, res) {
    const {title, company, location, description, employerEmail, postDate} = req.body;
    if(!title || !company || !location || !description || !employerEmail || !postDate) {
        return res.status(422).send("Missing data entry");
    }

    return JobModel.insertJob({title, company, location, description, employerEmail, postDate})
        .then((jobResponse) => {
            return res.status(200).send(jobResponse);
        })
        .catch(error => res.status(400).send(error));
});

//Edit jobs
router.put('/:', function(req, res) {
    
});

//Delete jobs
router.delete('/delete', function(req, res) {

});



module.exports = router;