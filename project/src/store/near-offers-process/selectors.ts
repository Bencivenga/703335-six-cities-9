import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getNearOffers = (state: State) => state[NameSpace.NearOffers].nearOffers;
