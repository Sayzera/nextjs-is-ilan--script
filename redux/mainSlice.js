import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
const initialState = {
  isLoading: false,
  isError: false,
  themeColor: '#000000',
};

export const setThemeMainColor = createAsyncThunk(
  'mainSlice/setThemeColor',
  async (themeColor, { rejectWithValue }) => {
    const querySnapshot = await getDocs(collection(db, 'test'));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

    return themeColor;
  }
);

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * Async işlemler yapılacak ise createAsyncThunk kullanılır.
     */
    builder.addCase(setThemeMainColor.fulfilled, (state, action) => {
      state.themeColor = action.payload;
    });
  },
});

export const { setThemeColor } = mainSlice.actions;

export default mainSlice.reducer;
