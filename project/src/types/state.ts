import {store} from '../store';
import {AuthorizationStatus, SortType} from '../const';
import {Offers, Offer} from '../types/offers';
import {Reviews} from '../types/reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};


export type OfferProcess = {
  offers: Offers;
  cityOffers: Offers;
  currentOffer: Offer | null;
  isCurrentOfferLoaded: boolean;
  isDataLoaded: boolean;
  activeCity: string;

};

export type ReviewsData = {
  reviews: Reviews;
};

export type NearOffersData = {
  nearOffers: Offers;
};

export type ChangeSortOptionProcess = {
  sortType: SortType;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


