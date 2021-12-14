const express = require('express');
const router = express.Router();
const JobModel = require('./model/Job.Model');
const jwt = require('jsonwebtoken');
const auth_middleware = require('./auth_middleware.js');
const { UserSchema } = require('./schema/User.Schema');
const { default: axios } = require('axios');
const { route } = require('./user');

// router.put('/putlike/:id', function(req,res) {
//     const id = req.params.id;
//     JobModel.findJobById(id)
//         .then((jobResponse)=>{
//             console.log(jobResponse.like)
//             if (!jobResponse.like){
//                 //return JobModel.updateJob(id,{$set:{like:true}})
//                 return JobModel.updateJob(id,{like:true})
//                     .then((jobResponse) => {
//                         if (!jobResponse){
//                             return res.status(404).send("Not found related jobs");
//                         }
//                         return res.status(200).send("putted yes")
//                     })
//                     .catch(error => res.status(400).send(error))
//             }else{
//                 return JobModel.updateJob(id,{like:false})
//                     .then((jobResponse) => {
//                         if (!jobResponse){
//                             return res.status(404).send("Not found related jobs");
//                         }
//                         return res.status(200).send("putted no")
//                     })
//                     .catch(error => res.status(400).send(error))
//             }
//         })
//         .catch(error => res.status(400).send(error))
// })

//Find all of the jobs
router.get('/findAll', function(req, res) {
    JobModel.getAllJobs()
        .then((jobResponse) => {
            // console.log(jobResponse);
            res.status(200).send(jobResponse)
        })
        .catch(error => res.status(400).send(error))
})

router.get('/jobDetail/:id', function(req, res) {
    const id = req.params.id;
    // console.log(id);
    return JobModel.findJobById(id)
        .then((jobResponse) => {
            if (!jobResponse){
                return res.status(404).send("Not found related jobs");
            }
            return res.status(200).send(jobResponse)
        })
        .catch(error => res.status(400).send(error))
})


//Find job by title
router.get('/:keyword', function(req, res) {
    const keyword = req.params.keyword;
    // console.log(keyword);
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

// router.get("/find/favoriteLst", function(req,res) {
//     return JobModel.findJobByLike(true)
//         .then((jobResponse) => {
//             if (!jobResponse){
//                 return res.status(404).send("Not found related jobs");
//             }
//             return res.status(200).send(jobResponse);
//         })
//         .catch(error => res.status(500).send("Issue getting jobs"));
// })

//Add jobs
router.post('/add', function(req, res) {
    let {title, company, location, description, employerEmail, web} = req.body;
    employerEmail = JSON.stringify(employerEmail);
    if(!title || !company || !location || !description || !employerEmail) {
        return res.status(422).send("All * fields are required");
    }

    
    // if(JobModel.findJobByTitleAndCompany(req.body.title, req.body.company)) {
    //     return res.status(422).send("Duplicate!");
    // }
    if (web != null){
        return JobModel.insertJob({title, company, location, description, employerEmail, web})
        .then((jobResponse) => {
            return res.status(200).send(jobResponse);
        })
        .catch(error => res.status(400).send(error));
    }else{
        return JobModel.insertJob({title, company, location, description, employerEmail})
        .then((jobResponse) => {
            return res.status(200).send(jobResponse);
        })
        .catch(error => res.status(400).send(error));
    }
});

//Edit jobs
router.put('/edit/:jobId', function(req, res) {
    // console.log(req.params);
    return JobModel.updateJob(req.params.jobId, req.body)
            .then(response => {
                console.log("backEnd update success");
                return res.status(200).send("Ok");
            })
            .catch(e => console.log("update failed"));     
});


//Delete jobs
router.delete('/delete/:jobId', function(req, res) {
    console.log(req.params)
    return JobModel.deleteOneJob(req.params.jobId)
        .then((response) => {
            console.log("delete successfully");
            return res.status(200).send("Ok");
        })
        .catch(error => console.log("Unable delete"));
});


module.exports = router;