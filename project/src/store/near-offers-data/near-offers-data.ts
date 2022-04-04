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
  },
});

export const {loadNearOffersAction} = nearOffersData.actions;
