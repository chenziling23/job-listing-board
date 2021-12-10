const express = require('express');
const users = require('./routes/user.js');
const jobs = require('./routes/job.js');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo');

const mongoString = "mongodb://127.0.0.1/job";
mongoose.connect(mongoString, { useNewUrlParser: true });

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();

// app.use(session({secret: "SUPER_DUPER_SECRET"}));
// app.use(session({secret: "SUPER_DUPER_SECRET",
//     store: MongoStore.create({ mongoUrl: mongoString }),
// }));


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', users);
app.use('/api/jobs', jobs);

app.listen(8000, function() {
    console.log('Starting server');
});