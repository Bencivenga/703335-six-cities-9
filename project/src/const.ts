export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '404',
}

export enum APIRoutes {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  nearOffers = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const MAX_OFFER_IMAGES= 6;

export const Ratings = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MARKER_WIDTH = 42;
export const MARKER_HEIGHT = 68;
export const HALF_WIDTH_MARKER = 0.5 * MARKER_WIDTH;

export const PlaceCardClass = {
  MainPlaceCard: 'cities__places-list tabs__content',
  NearPlaceCard: 'near-places__list',
};

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

export enum CommentOptions {
  minLength = 50,
  maxLength = 300,
}

