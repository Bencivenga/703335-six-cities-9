import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types/state';

const initialState: ReviewsData = {
  reviews: [],
};

export const reviewsData = createSlice({
  name: NameSpace.reviews,
  initialState,
  reducers: {
    loadReviewsAction: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadReviewsAction} = reviewsData.actions;
