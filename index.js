import express from 'express'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'
import bodyParser from 'body-parser'
import path from 'path'
import './config/env.js'
import './services/passport.js'
import { authRoutes } from './routes/authRoutes.js'
import { stripeRoutes } from './routes/stripeRoutes.js'
import { databaseKeys } from './config/keys.js'
import { cookieKeys } from './config/keys.js'
import { surveyRoutes } from './routes/surveyRoutes.js'

const __dirname = path.resolve()

mongoose.connect(databaseKeys.mongoURI, () => {
  console.log('Successfully connected to DB')
})

const app = express()
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKeys.cookieKey],
  }),
)
app.use(passport.initialize())
app.use(passport.session())
authRoutes(app)
stripeRoutes(app)
surveyRoutes(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
