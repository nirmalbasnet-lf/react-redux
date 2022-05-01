import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleSurveyResponse } from '../../actions';

const SurveyResponse = () => {
  const { surveyId, status } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleSurveyResponse({ surveyId, status }, navigate));
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <h4>Recording your response ...</h4>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default SurveyResponse;
