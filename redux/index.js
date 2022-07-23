import { configureStore } from '@reduxjs/toolkit';
import main from './mainSlice';

export const store = configureStore({
  reducer: {
    main,
  },
});
