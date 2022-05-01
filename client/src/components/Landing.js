import React from 'react';
import { useSelector } from 'react-redux';

const Landing = () => {
  const surveyResponse = useSelector(state => state.surveyResponse);
  return (
    <>
      {!surveyResponse && (
        <div style={{ textAlign: 'center' }}>
          <h1>Hello Full Stacker!</h1>
          Collect feedback from your users
        </div>
      )}

      {surveyResponse && (
        <div style={{ textAlign: 'center' }}>
          <h1>Thank you for your time!</h1>
          Your response has been successfully recorded
        </div>
      )}
    </>
  );
};

export default Landing;
