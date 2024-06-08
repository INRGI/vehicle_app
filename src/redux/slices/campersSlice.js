import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../../api/api';

export const getCampers = createAsyncThunk('campers/getCampers', async () => {
  const response = await fetchCampers();
  return response.data;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    data: [],
    favorites: [],
    status: 'idle',
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter(id => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleFavorite } = campersSlice.actions;
export default campersSlice.reducer;
