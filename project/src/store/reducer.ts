import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffer, changeSortOption} from './actions';
import {CityOffers} from '../types/offers';
import {SortType} from '../const';

const initialState: CityOffers = {
  city: 'Paris',
  offers: [],
  sortType: SortType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffer, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortType = action.payload;
    });
});
