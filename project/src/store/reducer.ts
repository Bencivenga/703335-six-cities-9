import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillCityOffers, changeSortOption, setHoveredOfferPin} from './actions';
import {InitialState} from '../types/state';
import {offers} from '../mocks/offers';
import {SortType} from '../const';


const initialState: InitialState = {
  activeCity: 'Paris',
  offers,
  sortType: SortType.Popular,
  hoveredOfferPin: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity= action.payload;
    })
    .addCase(fillCityOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setHoveredOfferPin, (state, action) => {
      state.hoveredOfferPin = action.payload;
    });
});
