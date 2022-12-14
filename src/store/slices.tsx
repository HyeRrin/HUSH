/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const likeSlice = createSlice({
  name: 'like',
  initialState: {
    value: [],
  },
  reducers: {
    getLikeData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = cartSlice.actions;
export const { getLikeData } = likeSlice.actions;
