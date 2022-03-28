import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getCityOffers, changeSortOption, setHoveredOfferPin} from './actions';
import {InitialState} from '../types/state';
import {offers} from '../mocks/offers';
import {SortType, citiesList} from '../const';

const FIRST_CITY = citiesList[0];

const initialState: InitialState = {
  activeCity: FIRST_CITY,
  offers,
  cityOffers: [],
  sortType: SortType.Popular,
  hoveredOfferPin: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity= action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(getCityOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setHoveredOfferPin, (state, action) => {
      state.hoveredOfferPin = action.payload;
    });
});
