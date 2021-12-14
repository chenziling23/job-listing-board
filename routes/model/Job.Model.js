const mongoose = require("mongoose");
const JobSchema = require("../schema/Job.Schema").JobSchema;
const JobModel = mongoose.model("Job", JobSchema);


//Find all job
function getAllJobs() {
    return JobModel.find({}).exec();
}

//Find job by id
function findJobById(id) {
    return JobModel.findById(id).exec();
}

//Find jobs by keyword
function findJobByKeyword(keyword) {
    return JobModel.find({title: {'$regex' : keyword, '$options': 'i'}}).exec();
}

function findJobByTitleAndCompany(title, company) {
    return JobModel.findOne({title: title, company: company}).exec();
}

// function findJobByCompany(company) {
//     return JobModel.find({company: company}).exec();
// }

function findJobByLike(like) {
    return JobModel.find({like:like}).exec();
}

//Add job item
function insertJob(job) {
    return JobModel.create(job);
}

//Update/Edit jobs
function updateJob(jobId, newProps) {
    // const foundPost = await PostPost.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    return JobModel.updateOne({_id: jobId}, newProps).exec();
    // return JobModel.findByIdAndUpdate(job)
}

//Delete job
function deleteOneJob(jobId) {
    return JobModel.deleteOne({_id: jobId}).exec();
}

module.exports = {
    getAllJobs,
    findJobById,
    findJobByKeyword,
    insertJob,
    updateJob,
    deleteOneJob,
    findJobByLike,
    findJobByTitleAndCompany,
};