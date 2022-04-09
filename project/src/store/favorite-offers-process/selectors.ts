import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getFavoriteOffers = (state: State) => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getDataLoaded = (state: State): boolean => state[NameSpace.FavoriteOffers].isDataLoaded;
export const getSameCityOffers = (state: State) => state[NameSpace.FavoriteOffers].sameCityOffers;
