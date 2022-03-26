import {Offers, Offer} from './types/offers';
import {SortType} from './const';

const sortByHighPrice = (offerA: Offer, offerB: Offer) => {
  if (offerA.price < offerB.price) {
    return 1;
  }

  if (offerA.price > offerB.price) {
    return -1;
  }

  return 0;
};

const sortByLowPrice = (offerA: Offer, offerB: Offer) => {
  if (offerA.price > offerB.price) {
    return 1;
  }

  if (offerA.price < offerB.price) {
    return -1;
  }

  return 0;
};

const sortByRating = (offerA: Offer, offerB: Offer) => {
  if (offerA.rating < offerB.rating) {
    return 1;
  }

  if (offerA.rating > offerB.rating) {
    return -1;
  }

  return 0;
};

export const getOffers = (cityName: string, offers: Offers, sortType: SortType) => {
  const cityOffers = offers.filter((offer) => offer.city.name === cityName);

  if (sortType === SortType.Popular) {
    return cityOffers;
  }

  switch (sortType) {
    case SortType.HighPriceFirst:
      cityOffers.sort(sortByHighPrice);
      break;

    case SortType.LowPriceFirst:
      cityOffers.sort(sortByLowPrice);
      break;

    case SortType.TopRatedFirst:
      cityOffers.sort(sortByRating);
      break;

    default:
      throw new Error('Неизвестный тип сортировки');
  }

  return cityOffers;
};

const MAX_RATING = 5;
export const getRatingPerc = (rating: number): number => Math.round(rating) / MAX_RATING * 100;
