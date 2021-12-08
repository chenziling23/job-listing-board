const Schema = require('mongoose').Schema;


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
            type: String,
        }

    }, {
        collection: 'jobs'
    }
)