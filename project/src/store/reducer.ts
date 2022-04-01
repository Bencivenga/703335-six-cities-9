import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, getCityOffersAction, changeSortOptionAction, loadOffersAction, requireAuthorizationAction} from './actions';
import {SortType, citiesList, AuthorizationStatus} from '../const';
import {Offers} from '../types/offers';

const FIRST_CITY = citiesList[0];

type InitialState = {
  activeCity: string;
  offers: Offers;
  cityOffers: Offers;
  sortType: SortType;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  activeCity: FIRST_CITY,
  offers: [],
  cityOffers: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
      state.isDataLoaded = true;
    })
    .addCase(changeCityAction, (state, action) => {
      state.activeCity= action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(getCityOffersAction, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(changeSortOptionAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
