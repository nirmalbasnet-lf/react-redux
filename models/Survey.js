import mongoose from 'mongoose'

const { Schema } = mongoose

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [String],
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateSent: {
    type: Date,
    default: Date.now(),
  },
  lastResponded: {
    type: Date,
    default: null,
  },
})

const SurveyModel = mongoose.model('surveys', surveySchema)
export default SurveyModel
