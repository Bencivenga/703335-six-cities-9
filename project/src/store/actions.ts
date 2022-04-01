import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {SortType, AuthorizationStatus, AppRoute} from '../const';

export const loadOffersAction = createAction<Offers>('loadOffers');
export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');
export const changeCityAction = createAction<string>('changeCity');
export const getCityOffersAction = createAction<Offers>('getCityOffers');
export const changeSortOptionAction = createAction<SortType>('changeSortOption');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
