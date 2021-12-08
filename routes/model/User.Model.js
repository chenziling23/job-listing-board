const mongoose = require("mongoose");
const UserSchema = require("../schema/User.Schema").UserSchema;
const UserModel = mongoose.model("User", UserSchema);


// Add/Register user
function insertUser(user) {
    return UserModel.create(user);
}

// Find/Log in user for authenticate
function findUserByUsername(username) {
    return UserModel.findOne({username}).exec();
}

// Add to favorite list
function insertFavoriteJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({username: username}, {$addToSet: {favorites: jobId}});
} 

// Delete favorite list
function deleteFavoriteJobOfUser(username, jobId) {
    return UserModel.findOneAndUpdate({username: username}, {$pull: {favorites: jobId}});
}

module.exports = {
    insertUser,
    findUserByUsername,
    insertFavoriteJobOfUser,
    deleteFavoriteJobOfUser
};