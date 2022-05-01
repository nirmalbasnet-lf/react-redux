import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

const CreateSurvey = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  const onSurveySubmit = () => {
    setShowFormReview(true);
  };

  const onCancelReview = () => {
    setShowFormReview(false);
  };

  return (
    <>
      {showFormReview && <SurveyFormReview onCancelReview={onCancelReview} />}
      {!showFormReview && <SurveyForm onSurveySubmit={onSurveySubmit} />}
    </>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(CreateSurvey);
