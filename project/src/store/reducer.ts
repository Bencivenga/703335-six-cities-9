import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, getCityOffersAction, changeSortOptionAction, loadOffersAction, loadOfferAction, requireAuthorizationAction, loadReviewsAction, loadNearOffersAction} from './actions';
import {SortType, citiesList, AuthorizationStatus} from '../const';
import {Offers, Offer} from '../types/offers';
import {Reviews} from '../types/reviews';

const FIRST_CITY = citiesList[0];

type InitialState = {
  activeCity: string;
  offers: Offers;
  currentOffer: Offer | null;
  cityOffers: Offers;
  nearOffers: Offers;
  reviews: Reviews;
  sortType: SortType;
  isDataLoaded: boolean;
  isCurrentOfferLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  activeCity: FIRST_CITY,
  offers: [],
  currentOffer: null,
  cityOffers: [],
  nearOffers: [],
  reviews: [],
  sortType: SortType.Popular,
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
      state.isDataLoaded = true;
    })
    .addCase(loadOfferAction, (state, action) => {
      state.currentOffer = action.payload;
      state.isCurrentOfferLoaded = true;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearOffersAction, (state, action) => {
      state.nearOffers = action.payload;
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
