import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACE_OFFERS_COUNT: 5,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg'],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placeOffersCount = {Settings.PLACE_OFFERS_COUNT}
      cities = {Settings.CITIES}
    />
  </React.StrictMode>,
  document.getElementById('root'));
