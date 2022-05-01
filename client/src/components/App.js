import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Landing from './Landing';

import { fetchAuthUser } from '../actions';
import Header from './Header';
import CreateSurvey from './surveys/CreateSurvey';
import Dashboard from './Dashboard';
import SurveyResponse from './surveys/SurveyResponse';

const App = () => {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/surveys" exact element={<Dashboard />} />
          <Route path="/surveys/new" element={<CreateSurvey />} />
          <Route
            path="/surveys/:surveyId/response/:status"
            element={<SurveyResponse />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
