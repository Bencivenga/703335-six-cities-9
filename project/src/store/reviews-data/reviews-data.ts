import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types/state';

const initialState: ReviewsData = {
  reviews: [],
  isDataLoaded: false,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    loadReviewsAction: (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    },

    changeDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
  },
});

export const {loadReviewsAction, changeDataLoaded} = reviewsData.actions;
