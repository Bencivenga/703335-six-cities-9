import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, getCityOffersAction, changeSortOptionAction, setHoveredOfferPinAction, loadOffersAction} from './actions';
import {SortType, citiesList} from '../const';
import {Offers, Offer} from '../types/offers';

const FIRST_CITY = citiesList[0];

type InitialState = {
  activeCity: string;
  offers: Offers;
  cityOffers: Offers;
  sortType: SortType;
  hoveredOfferPin: null | Offer;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  activeCity: FIRST_CITY,
  offers: [],
  cityOffers: [],
  sortType: SortType.Popular,
  hoveredOfferPin: null,
  isDataLoaded: false,
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
    .addCase(setHoveredOfferPinAction, (state, action) => {
      state.hoveredOfferPin = action.payload;
    });
});
