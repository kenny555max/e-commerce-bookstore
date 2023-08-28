import mongoose from "mongoose";

//model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    type: String,
    status: {
        type: String,
        default: 'not verified'
    },
    token: String
});

const UserModel = mongoose.model('bookstoreUser', userSchema);

export default UserModel;