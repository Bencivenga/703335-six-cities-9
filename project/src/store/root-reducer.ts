import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offerProcess} from './offer-process/offer-process';
import {nearOffersData} from './near-offers-process/near-offers-process';
import {reviewsData} from './reviews-data/reviews-data';
import {changeSortOptionProcess} from './change-sort-option-process/change-sort-option-process';
import {userProcess} from './user-process/user-process';
import {favoriteOffersProcess} from './favorite-offers-process/favorite-offers-process';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offerProcess.reducer,
  [NameSpace.near_offers]: nearOffersData.reducer,
  [NameSpace.reviews]: reviewsData.reducer,
  [NameSpace.sorting]: changeSortOptionProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.favorite_offers]: favoriteOffersProcess.reducer,
});

