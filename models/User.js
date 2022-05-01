import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  profileImage: {
    type: String,
    default: null,
  },
  credits: {
    type: Number,
    default: 0,
  },
})

const UserModel = mongoose.model('users', userSchema)
export default UserModel
