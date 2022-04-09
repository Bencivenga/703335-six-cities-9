import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorizationAction: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    getUserDataAction: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {requireAuthorizationAction, getUserDataAction} = userProcess.actions;


