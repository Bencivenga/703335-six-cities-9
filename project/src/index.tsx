import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const city = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const Settings = {
  PLACE_OFFERS_COUNT: 5,
  CITIES: city,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffersCount = {Settings.PLACE_OFFERS_COUNT}
      cities = {Settings.CITIES}
    />
  </React.StrictMode>,
  document.getElementById('root'));
