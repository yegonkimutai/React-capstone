import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mainUrl = 'https://api.coinlore.net/api/tickers/';

const initialState = {
  currencies: [],
};

export const getCurrencies = createAsyncThunk('seasons/getCurrencies', async () => {
  const response = axios.get(mainUrl);
  const result = (await response).data;
  return result.data;
});

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  extraReducers: (builders) => {
    builders.addCase(getCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  },
});

export default currencySlice.reducer;
