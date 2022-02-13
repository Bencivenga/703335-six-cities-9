import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACE_OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffersCount = {Settings.PLACE_OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
