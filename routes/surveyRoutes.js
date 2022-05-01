import surveyTemplate from '../email-templates/surveyTemplate.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { creditMiddleware } from '../middlewares/creditMiddleware.js'
import {
  createSurvey,
  getUserSurveys,
  recordSurveyResponse,
} from '../repositories/surveyRepository.js'
import { Mailer } from '../services/Mailer.js'

export const surveyRoutes = (app) => {
  app.get('/api/surveys', authMiddleware, async (req, res) => {
    const surveys = await getUserSurveys(req.user.id)
    res.send(surveys)
  })

  app.post('/api/surveys', authMiddleware, creditMiddleware, async (req, res) => {
    try {
      const { title, subject, recipients, body } = req.body

      const recipientEmails = recipients
        .replace(/,\s*$/, '')
        .split(',')
        .map((email) => email.trim())

      const survey = await createSurvey({
        title,
        subject,
        body,
        recipients: recipientEmails,
        _user: req.user.id,
      })

      const mailer = new Mailer({ subject, recipients }, surveyTemplate(survey))
      await mailer.sendMail()

      req.user.credits -= 1
      const user = await req.user.save()
      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  app.post('/api/surveys/response', async (req, res) => {
    const { surveyId, status } = req.body
    await recordSurveyResponse(surveyId, status)
    res.status(200).send('Success')
  })
}
