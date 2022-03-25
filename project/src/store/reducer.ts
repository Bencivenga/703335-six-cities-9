import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffer} from './actions';
import {CityOffers} from '../types/offers';

const initialState: CityOffers = {
  city: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffer, (state, action) => {
      state.offers.length = 0;
      action.payload.forEach((offer) => {
        state.offers.push(offer);
      });
    });
});
