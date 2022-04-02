import {createAsyncThunk} from '@reduxjs/toolkit';
import {store} from '../store';
import {api} from './index';
import {APIRoutes, AuthorizationStatus, AppRoute} from '../const';
import {loadOffersAction, requireAuthorizationAction, redirectToRoute, loadReviewsAction, loadNearOffersAction} from './actions';
import {Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {CommentData} from '../types/comment-data';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = createAsyncThunk(
  'fetchOffers',
  async() => {
    try {
      const {data} = await api.get<Offers>(APIRoutes.Offers);
      store.dispatch(loadOffersAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'fetchReviews',
  async(hotelId: number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoutes.Comments}/${hotelId}`);
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
      const {data} = await api.post<Reviews>(`${APIRoutes.Comments}/${hotelId}`, comment);
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
      const {data} = await api.get<Offers>(`${APIRoutes.Offers}/${hotelId}${APIRoutes.nearOffers}`);
      store.dispatch(loadNearOffersAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async() => {
    try {
      await api.get(APIRoutes.Login);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
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
      const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
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
      await api.delete(APIRoutes.Logout);
      dropToken();
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);


