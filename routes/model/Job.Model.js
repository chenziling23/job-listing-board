const mongoose = require("mongoose");
const JobSchema = require("../schema/Job.Schema").JobSchema;
const JobModel = mongoose.model("Job", JobSchema);


//Find all job
function getAllJobs() {
    return JobModel.find().exec();
}

//Find jobs by keyword
function findJobByKeyword(keyword) {
    return JobModel.find({keyword}).exec();
}

//Add job item
function insertJob(job) {
    return JobModel.create(job);
}

//Update/Edit jobs
function updateJob(job) {
    return JobModel.updateOne(job).exec();
}

//Delete job
function deleteOneJob() {
    return JobModel.deleteOne().exec();
}

module.exports = {
    getAllJobs,
    findJobByKeyword,
    insertJob,
    updateJob,
    deleteOneJob,
};