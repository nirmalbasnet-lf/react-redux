import Stripe from 'stripe'
import { stripeKeys } from '../config/keys.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const stripe = new Stripe(stripeKeys.stripeSecretKey)

export const stripeRoutes = (app) => {
  app.post('/api/stripe', authMiddleware, async (req, res) => {
    const { body } = req
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Buy email credits',
      source: body.id,
    })
    req.user.credits += 5
    const user = await req.user.save()
    res.send(user)
  })
}
