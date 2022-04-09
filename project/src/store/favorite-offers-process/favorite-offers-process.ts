import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, City} from '../../const';
import {FavoriteOffersProcess, SameCityOffers} from '../../types/state';


const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
  sameCityOffers: {},
  isDataLoaded: false,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {
    loadFavoriteOffersAction: (state, action) => {
      state.favoriteOffers = action.payload;
      state.sameCityOffers = state.favoriteOffers.reduce((obj: SameCityOffers, favoriteOffer) => {
        const city = favoriteOffer.city.name as City;

        if (!obj[city]) {
          obj[city] = [];
        }

        obj[city].push(favoriteOffer);

        return obj;
      }, {} as SameCityOffers);
      state.isDataLoaded = true;
    },
    changeDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    changeFavoriteOffersAction: (state, action) => {
      const offer = action.payload;
      if (offer.isFavorite) {
        state.favoriteOffers = [...state.favoriteOffers, offer];
      } else {
        const favoriteOfferIndex = state.favoriteOffers.findIndex((favoriteOffer) => favoriteOffer.id === offer.id);
        state.favoriteOffers.splice(favoriteOfferIndex, 1);

        Object.keys(state.sameCityOffers).forEach((city, index) => {
          const currentOffers = Object.values(state.sameCityOffers)[index];
          const sameCityOfferIndex = currentOffers.findIndex((favoriteOffer) => favoriteOffer.id === offer.id);
          if (offer.city.name === city) {
            currentOffers.splice(sameCityOfferIndex, 1);
          }
        });
      }
    },
  },
});

export const {loadFavoriteOffersAction, changeFavoriteOffersAction, changeDataLoaded} = favoriteOffersProcess.actions;
