export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '404',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  nearOffers = '/nearby',
  FavoriteOffers = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTPCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  NearOffers = 'NEAR_OFFERS',
  Reviews = 'REVIEWS',
  Sorting = 'SORTING',
  FavoriteOffers = 'FAVORITE_OFFERS',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const MAX_OFFER_IMAGES= 6;

export const Ratings = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

export const MarkerOption = {
  MarkerDefault: 'img/pin.svg',
  MarkerCurrent: 'img/pin-active.svg',
  MarkerWidth: 42,
  MarkerHeight: 68,
} as const;

export const PlaceCardClass = {
  MainPlaceCard: 'cities__places-list tabs__content',
  NearPlaceCard: 'near-places__list',
} as const;

export const AddToFavoriteBtnOption = {
  PLACE_CARD_OPTIONS: {
    btnClass: 'place-card',
    btnSize: {
      width: '18',
      height: '19',
    },
  },
  ROOM_OPTIONS: {
    btnClass: 'property',
    btnSize: {
      width: '31',
      height: '33',
    },
  },
} as const;

export enum SortType {
 Popular = 'Popular',
 LowPriceFirst = 'Price: low to high',
 HighPriceFirst = 'Price: high to low',
 TopRatedFirst = 'Top rated first',
}

export const sortOptions = [
  SortType.Popular,
  SortType.LowPriceFirst,
  SortType.HighPriceFirst,
  SortType.TopRatedFirst,
];

export enum CommentOption {
  minLength = 50,
  maxLength = 300,
  maxCount = 10,
}

