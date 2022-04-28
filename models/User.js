import mongoose from 'mongoose';

const {Schema} = mongoose

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    profileImage: {
        type: String,
        default: null
    }
})

const UserModel = mongoose.model('users', userSchema)
export default UserModel