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
    filteredData: [],
    favorites: [],
    activeCamper: null,
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
    },
    setActiveCamper: (state, action) => {
      state.activeCamper = action.payload;
    },
    filterCampers: (state, action) => {
      const { location, selectedItems, selectedType } = action.payload;

      state.filteredData = state.data.filter(camper => {
        const matchesLocation = camper.location.toLowerCase().includes(location.toLowerCase());

        const matchesItems = Object.keys(selectedItems).every(item => {
          if (!selectedItems[item]) return true;
          switch (item) {
            case 'AC': return camper.details.airConditioner > 0;
            case 'Automatic': return camper.transmission === 'automatic';
            case 'Kitchen': return camper.details.kitchen > 0;
            case 'TV': return camper.details.TV > 0;
            case 'Shower/WC': return camper.details.shower > 0;
            default: return true;
          }
        });

        const matchesType = !selectedType || (selectedType === 'Van' && camper.form === 'panelTruck') ||
          (selectedType === 'Fully Integrated' && camper.form === 'fullyIntegrated') ||
          (selectedType === 'Alcove' && camper.form === 'alcove');

        return matchesLocation && matchesItems && matchesType;
      });
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
        state.filteredData = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleFavorite, filterCampers, setActiveCamper } = campersSlice.actions;
export default campersSlice.reducer;
