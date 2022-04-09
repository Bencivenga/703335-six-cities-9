import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {sortComments} from '../../utils';


export const getReviews = (state: State) => sortComments(state[NameSpace.Reviews].reviews);
export const getDataLoaded = (state: State) => state[NameSpace.Reviews].isDataLoaded;
