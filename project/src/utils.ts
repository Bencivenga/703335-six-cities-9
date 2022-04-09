import {Offers, Offer} from './types/offers';
import {Review, Reviews} from './types/reviews';
import {SortType, AuthorizationStatus} from './const';

const MAX_RATING = 5;
export const getRatingPercentage = (rating: number): number => Math.round(rating) / MAX_RATING * 100;

export const sortOffers = (value: SortType, offers: Offers) => {
  const offersToSort = [...offers];

  switch(value) {
    case SortType.HighPriceFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? -1 : 1));

    case SortType.LowPriceFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? 1 : -1));

    case SortType.TopRatedFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.rating > b.rating ? -1 : 1));

    default:
      return offersToSort.sort((a:Offer, b:Offer) => (a.id > b.id ? 1 : -1));
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const sortComments = (comments: Reviews) => {
  const commentsToSort = [...comments];
  return commentsToSort.sort((a:Review, b:Review) => (a.date > b.date ? -1 : 1));
};
