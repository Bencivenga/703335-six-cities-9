import {createAction} from '@reduxjs/toolkit';
import {Offers, Offer} from '../types/offers';
import {SortType} from '../const';

export const changeCity = createAction<string>('changeCity');
export const getCityOffers = createAction<Offers>('getCityOffers');
export const changeSortOption = createAction<SortType>('changeSortOption');
export const setHoveredOfferPin = createAction<Offer | null>('setHoveredOfferPin');
