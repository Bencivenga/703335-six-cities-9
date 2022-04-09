import {State} from '../../types/state';
import {NameSpace}  from '../../const';

export const getOffer = (state: State) => state[NameSpace.Offers].currentOffer;
export const getOfferLoaded = (state: State) => state[NameSpace.Offers].isOfferLoaded;
export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getCityOffers = (state: State) => state[NameSpace.Offers].cityOffers;
export const getDataLoaded = (state: State) => state[NameSpace.Offers].isDataLoaded;
export const getActiveCity = (state: State)  => state[NameSpace.Offers].activeCity;
