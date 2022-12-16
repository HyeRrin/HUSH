import { configureStore } from '@reduxjs/toolkit';
import { cartSlice, likeSlice, productList } from './slices';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    like: likeSlice.reducer,
    productList: productList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
