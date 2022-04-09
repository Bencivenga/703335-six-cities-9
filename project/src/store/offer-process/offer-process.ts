import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, citiesList} from '../../const';
import {OfferProcess} from '../../types/state';

const FIRST_CITY = citiesList[0];

const initialState: OfferProcess = {
  offers: [],
  cityOffers: [],
  currentOffer: null,
  activeCity: FIRST_CITY,
  isDataLoaded: false,
  isOfferLoaded: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadOffersAction: (state, action) => {
      state.offers = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
      state.isDataLoaded = true;
    },
    loadOfferAction: (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoaded = true;
    },
    changeOfferLoadedAction: (state, action) => {
      state.isOfferLoaded = action.payload;
    },
    changeCityAction: (state, action) => {
      state.activeCity = action.payload;
      state.cityOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    },
    changeOfferAction: (state, action) => {
      const newOffer = action.payload;
      const offerIndex = state.offers.findIndex((offer) => offer.id === newOffer.id);
      state.offers.splice(offerIndex, 1, newOffer);

      const cityOfferIndex = state.cityOffers.findIndex((offer) => offer.id === newOffer.id);
      state.cityOffers.splice(cityOfferIndex, 1, newOffer);
    },
  },
});

export const {loadOffersAction, loadOfferAction, changeOfferLoadedAction, changeCityAction, changeOfferAction} = offerProcess.actions;
