import SurveyModel from '../models/Survey.js'

export const createSurvey = async (payload) => {
  const newSurvey = new SurveyModel(payload)
  return await newSurvey.save()
}

export const recordSurveyResponse = async (surveyId, status) => {
  if (status === 'like') {
    return await SurveyModel.findByIdAndUpdate(surveyId, {
      $inc: { like: 1 },
      $set: { lastResponded: new Date() },
    })
  }

  return await SurveyModel.findByIdAndUpdate(surveyId, {
    $inc: { dislike: 1 },
    $set: { lastResponded: new Date() },
  })
}

export const getUserSurveys = async (user) => {
  return await SurveyModel.find({ _user: user }, { recipients: 0 }).sort({ _id: -1 })
}
