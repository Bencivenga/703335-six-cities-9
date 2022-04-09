import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getSortType = (state: State) => state[NameSpace.Sorting].sortType;
