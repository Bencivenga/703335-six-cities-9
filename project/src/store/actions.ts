import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';
import {SortType} from '../const';

export const changeCity = createAction<string>('changeCity');
export const fillOffer = createAction<Offers>('fillOffer');
export const changeSortOption = createAction<SortType>('changeSortOption');
