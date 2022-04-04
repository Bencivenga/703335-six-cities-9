import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const redirectAction = createAction<AppRoute>('redirect');
