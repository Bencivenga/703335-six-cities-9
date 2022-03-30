import {createAsyncThunk} from '@reduxjs/toolkit';
import {store} from '../store';
import {api} from './index';
import {APIRoutes} from '../const';
import {loadOffersAction} from './actions';
import {Offers} from '../types/offers';

export const fetchOffersAction = createAsyncThunk(
  'fetchOffers',
  async() => {
    const {data} = await api.get<Offers>(APIRoutes.Offers);
    store.dispatch(loadOffersAction(data));
  },
);
