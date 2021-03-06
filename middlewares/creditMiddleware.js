export const creditMiddleware = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'You do not have enough credit' })
  }

  next()
}
