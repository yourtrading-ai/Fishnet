import { configureStore } from '@reduxjs/toolkit';
import algorithmSlice from '@slices/algorithmSlice';
import appSlice from '@slices/appSlice';
import authSlice from '@slices/authSlice';
import indexerSlice from '@slices/indexerSlice';
import transactionSlice from '@slices/transactionSlice';
import dataSlice from '@slices/dataSlice';
import executionSlice from '@slices/executionSlice';
import monitorAccessSlice from '@slices/monitorAccessSlice';
import profileSlice from '@slices/profileSlice';
import timeseriesSlice from '@slices/timeseriesSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    indexer: indexerSlice.reducer,
    transaction: transactionSlice.reducer,
    datasets: dataSlice.reducer,
    algorithm: algorithmSlice.reducer,
    execution: executionSlice.reducer,
    timeseries: timeseriesSlice.reducer,
    monitorAccess: monitorAccessSlice.reducer,
    profile: profileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
