import UserModel from '../models/User.js'

export const createUser = async (user) => {
    const userToSave = new UserModel(user)
    return await userToSave.save()
}

export const findUserByGoogleId = async (googleId) => {
    return await UserModel.findOne({googleId})
}

export const findUserById = async (id) => {
    return await UserModel.findById(id)
}