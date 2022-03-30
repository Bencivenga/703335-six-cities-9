import {createAction} from '@reduxjs/toolkit';
import {Offers, Offer} from '../types/offers';
import {SortType} from '../const';

export const loadOffersAction = createAction<Offers>('loadOffers');
export const changeCityAction = createAction<string>('changeCity');
export const getCityOffersAction = createAction<Offers>('getCityOffers');
export const changeSortOptionAction = createAction<SortType>('changeSortOption');
export const setHoveredOfferPinAction = createAction<Offer | null>('setHoveredOfferPin');
