import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {NearOffersData} from '../../types/state';

const initialState: NearOffersData = {
  nearOffers: [],
};

export const nearOffersData = createSlice({
  name: NameSpace.near_offers,
  initialState,
  reducers: {
    loadNearOffersAction: (state, action) => {
      state.nearOffers = action.payload;
    },
    changeNearOffersAction: (state, action) => {
      const nearOffer = action.payload;
      const index = state.nearOffers.findIndex((offer) => offer.id === nearOffer.id);
      state.nearOffers.splice(index, 1, nearOffer);
    },
  },
});

export const {loadNearOffersAction, changeNearOffersAction} = nearOffersData.actions;
