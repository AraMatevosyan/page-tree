import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.ts';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {},
});

export default pagesSlice.reducer;
