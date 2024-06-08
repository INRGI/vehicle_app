import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/campersSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['campers']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    campers: campersReducer,
}));


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  export const persistor = persistStore(store);
