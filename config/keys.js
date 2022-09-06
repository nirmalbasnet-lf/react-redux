export const googleAuthKeys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
}

export const databaseKeys = {
  mongoURI: process.env.MONGO_URI,
}

export const cookieKeys = {
  cookieKey: process.env.COOKIE_KEY,
}

export const stripeKeys = {
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
}

export const mailKeys = {
  service: 'gmail',
  user: '',
  pass: '',
}

export const appKeys = {
  host: process.env.APP_HOST,
}
