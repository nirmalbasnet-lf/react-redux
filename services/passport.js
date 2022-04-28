import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { googleAuthKeys } from '../config/keys.js'
import { createUser, findUserByGoogleId, findUserById } from '../repositories/userRepository.js'

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await findUserById(id)
    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: googleAuthKeys.googleClientID,
    clientSecret: googleAuthKeys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (_accessToken, _refreshToken, profile, done) => {
    const checkUserExists = await findUserByGoogleId(profile.id)
    if (!checkUserExists) {
        const user = {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            profileImage: profile.photos[0].value
        }
    
        const createdUser = await createUser(user)
        done(null, createdUser)
    }
    done(null, checkUserExists)
}))
