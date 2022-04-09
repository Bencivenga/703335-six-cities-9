import {createAsyncThunk} from '@reduxjs/toolkit';
import {store} from '../store';
import {api} from './index';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {redirectAction} from './actions';
import {requireAuthorizationAction, getUserDataAction} from './user-process/user-process';
import {loadOffersAction, loadOfferAction, changeOfferAction} from './offer-process/offer-process';
import {loadReviewsAction} from './reviews-data/reviews-data';
import {loadNearOffersAction} from './near-offers-process/near-offers-process';
import {loadFavoriteOffersAction, changeFavoriteOffersAction} from './favorite-offers-process/favorite-offers-process';
import {changeNearOffersAction} from './near-offers-process/near-offers-process';
import {Offers, Offer} from '../types/offers';
import {Reviews} from '../types/reviews';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {CommentData} from '../types/comment-data';
import {FavoriteOffersData} from '../types/favorite-offers-data';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = createAsyncThunk(
  'fetchOffers',
  async() => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffersAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferAction = createAsyncThunk(
  'fetchOffer',
  async(hotelId: number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${hotelId}`);
      store.dispatch(loadOfferAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'fetchFavoriteOffers',
  async() => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.FavoriteOffers}`);
      store.dispatch(loadFavoriteOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendFavoriteOfferChangeAction = createAsyncThunk(
  'sendFavoriteOfferChange',
  async({hotelId, status}: FavoriteOffersData) => {
    try {
      const {data} = await api.post<Offer>(`${APIRoute.FavoriteOffers}/${hotelId}/${status}`);
      store.dispatch(changeOfferAction(data));
      store.dispatch(changeNearOffersAction(data));
      store.dispatch(changeFavoriteOffersAction(data));
      store.dispatch(loadOfferAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'fetchReviews',
  async(hotelId: number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${hotelId}`);
      store.dispatch(loadReviewsAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk(
  'sendReview',
  async({hotelId, comment}: CommentData) => {
    try {
      const {data} = await api.post<Reviews>(`${APIRoute.Comments}/${hotelId}`, comment);
      store.dispatch(loadReviewsAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk(
  'fetchNearOffers',
  async(hotelId: number) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${hotelId}${APIRoute.nearOffers}`);
      store.dispatch(loadNearOffersAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchUserData = createAsyncThunk(
  'user/getUserData',
  async () => {
    const {data: {avatarUrl, id, isPro, name}} = await api.get(APIRoute.Login);
    store.dispatch(getUserDataAction({avatarUrl, id, name, isPro}));
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async() => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(fetchUserData());
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(fetchUserData());
      store.dispatch(redirectAction(AppRoute.Main));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async() => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);


