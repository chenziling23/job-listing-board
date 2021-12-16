const Schema = require('mongoose').Schema;
const moment = require('moment')


exports.JobSchema = new Schema(

    {
        title: {
            type: String,
        },
        company: {
            type: String,
        },
        location: {
            type: String,
        },
        description: {
            type: String,
        },
        employerEmail: {
            type: String,
        },
        postDate: {
            type: Date,
            default: moment(),
        },
        web:{
            type: String,
        },
        postUser: {
            type: String,
        }
    }, {
        collection: 'jobs'
    }
)