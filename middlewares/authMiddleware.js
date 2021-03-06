export const authMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must login first!' })
  }

  next()
}
