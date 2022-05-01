import nodemailer from 'nodemailer'
import { mailKeys } from '../config/keys.js'

export class Mailer {
  constructor(survey, template) {
    this.survey = survey
    this.template = template
  }

  async sendMail() {
    try {
      const transporter = nodemailer.createTransport({
        service: mailKeys.service,
        auth: {
          user: mailKeys.user,
          pass: mailKeys.pass,
        },
      })

      const info = await transporter.sendMail({
        from: mailKeys.user,
        to: this.survey.recipients,
        subject: this.survey.subject,
        html: this.template,
      })
    } catch (err) {
      throw err
    }
  }
}
