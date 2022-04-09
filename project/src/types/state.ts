import {store} from '../store';
import {AuthorizationStatus, SortType, City} from '../const';
import {Offers, Offer} from '../types/offers';
import {Reviews} from '../types/reviews';
import {User} from '../types/user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: User | null;
};


export type OfferProcess = {
  offers: Offers;
  cityOffers: Offers;
  currentOffer: Offer | null;
  isDataLoaded: boolean;
  activeCity: string;
  isOfferLoaded: boolean;
};

export type ReviewsData = {
  reviews: Reviews;
  isDataLoaded: boolean;
};

export type NearOffersData = {
  nearOffers: Offers;
};

export type ChangeSortOptionProcess = {
  sortType: SortType;
};

export type SameCityOffers = {
  [key in City]: Offers
};

export type FavoriteOffersProcess = {
  favoriteOffers: Offers;
  sameCityOffers: SameCityOffers | Record<string, never>;
  isDataLoaded: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
