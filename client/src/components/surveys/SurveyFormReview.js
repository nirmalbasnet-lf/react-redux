import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSendSurvey } from '../../actions';
import surveyFormFields from './surveyFormFields';

export default props => {
  const dispatch = useDispatch();

  const [isProcessing, setIsProcessing] = useState(false);

  const formState = useSelector(state => state.form.surveyForm.values);
  const errorState = useSelector(state => state.error);

  useEffect(() => {
    setIsProcessing(false);
  }, [errorState]);

  const navigate = useNavigate();

  const submitSurvey = () => {
    setIsProcessing(true);
    dispatch(handleSendSurvey(formState, navigate));
  };

  const renderSurveyFormValues = surveyFormFields.map(({ name, label }) => (
    <div key={name} style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <div>{formState[name]}</div>
    </div>
  ));

  return (
    <>
      {errorState && errorState.error && (
        <p className="red white-text" style={{ padding: '10px' }}>
          {errorState.errorMessage}
        </p>
      )}
      <h5>Please confirm your entries</h5>
      <div style={{ marginBottom: '20px' }}>{renderSurveyFormValues}</div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={props.onCancelReview}
      >
        Back
      </button>

      <button
        onClick={submitSurvey}
        className="green white-text btn-flat right"
        disabled={isProcessing}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </>
  );
};
