import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SortType} from '../../const';
import {ChangeSortOptionProcess} from '../../types/state';

const initialState: ChangeSortOptionProcess = {
  sortType: SortType.Popular,
};

export const changeSortOptionProcess = createSlice({
  name: NameSpace.sorting,
  initialState,
  reducers: {
    changeSortOptionAction: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeSortOptionAction} = changeSortOptionProcess.actions;
