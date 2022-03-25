import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offers';

export const changeCity = createAction<string>('changeCity');
export const fillOffer = createAction<Offers>('fillOffer');
