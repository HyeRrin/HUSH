import { configureStore } from '@reduxjs/toolkit';
import { cartSlice, likeSlice } from './slices';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
