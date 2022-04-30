import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  enhancers: [applyMiddleware(reduxThunk)],
});

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
