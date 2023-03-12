import { configureStore } from '@reduxjs/toolkit';
import algorithmSlice from '@slices/algorithmSlice';
import appSlice from '@slices/appSlice';
import dataSlice from '@slices/dataSlice';
import profileSlice from '@slices/profileSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    datasets: dataSlice.reducer,
    algorithm: algorithmSlice.reducer,
    profile: profileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
