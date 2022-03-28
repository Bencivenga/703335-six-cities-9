import {store} from '../store';
import {Offers, Offer} from '../types/offers';
import { SortType } from '../const';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  activeCity: string;
  offers: Offers;
  sortType: SortType;
  hoveredOfferPin: null | Offer;
}

