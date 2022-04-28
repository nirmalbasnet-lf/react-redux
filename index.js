import express from 'express'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'
import './config/env.js'
import './services/passport.js'
import { authRoutes } from './routes/authRoutes.js'
import { databaseKeys } from './config/keys.js'
import { cookieKeys } from './config/keys.js'
 
mongoose.connect(databaseKeys.mongoURI, () => {
    console.log('Successfully connected to DB')
})

const app = express()
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKeys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())
authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
