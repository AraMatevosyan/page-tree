import { configureStore } from '@reduxjs/toolkit';

import pagesReducer from './slices/pageSlice';

export const store = configureStore({
  reducer: { pages: pagesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
