import {createAction} from '@reduxjs/toolkit';
import {Offers, Offer} from '../types/offers';
import {Reviews} from '../types/reviews';
import {SortType, AuthorizationStatus, AppRoute} from '../const';

export const loadOffersAction = createAction<Offers>('loadOffers');
export const loadOfferAction = createAction<Offer>('loadOffer');
export const loadReviewsAction = createAction<Reviews>('loadReviews');
export const loadNearOffersAction = createAction<Offers>('loadNearOffers');
export const requireAuthorizationAction = createAction<AuthorizationStatus>('requireAuthorization');
export const changeCityAction = createAction<string>('changeCity');
export const getCityOffersAction = createAction<Offers>('getCityOffers');
export const changeSortOptionAction = createAction<SortType>('changeSortOption');
export const redirectAction = createAction<AppRoute>('redirect');
