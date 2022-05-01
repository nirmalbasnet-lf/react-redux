import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchSurveys } from '../../actions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchSurveys());
  }, []);

  const surveys = useSelector(state => state.surveys);

  const renderSurveys = () => {
    return surveys.map(survey => (
      <div key={survey._id} className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action" style={{ display: 'flex' }}>
          <p
            style={{
              marginRight: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#f9a825',
            }}
          >
            <strong>{survey.like}</strong>
            <i className="material-icons">thumb_up</i>
          </p>
          <p
            style={{
              marginLeft: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#F44336',
            }}
          >
            <strong>{survey.dislike}</strong>
            <i className="material-icons">thumb_down</i>
          </p>
        </div>
      </div>
    ));
  };

  return <>{renderSurveys()}</>;
};
