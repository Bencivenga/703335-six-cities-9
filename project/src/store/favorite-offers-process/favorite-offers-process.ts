import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FavoriteOffersProcess} from '../../types/state';

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
  areFavoriteOffersLoaded: false,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.favorite_offers,
  initialState,
  reducers: {
    loadFavoriteOffersAction: (state, action) => {
      state.favoriteOffers = action.payload;
      state.areFavoriteOffersLoaded = true;
    },
    changeFavoriteOffersAction: (state, action) => {
      const offer = action.payload;

      if (offer.isFavorite) {
        state.favoriteOffers = [...state.favoriteOffers, offer];
      } else {
        const index = state.favoriteOffers.findIndex((favoriteOffer) => favoriteOffer.id === offer.id);
        state.favoriteOffers.splice(index, 1);
      }
    },
  },
});

export const {loadFavoriteOffersAction, changeFavoriteOffersAction} = favoriteOffersProcess.actions;
