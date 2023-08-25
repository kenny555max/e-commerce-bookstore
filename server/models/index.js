import mongoose from "mongoose";

//model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    type: String
});

const UserModel = mongoose.model('bookstoreUser', userSchema);

export default UserModel;