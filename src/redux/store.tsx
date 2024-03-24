import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './slices/sideBarSlice';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
  sideBar: sideBarReducer,
});

const persistConfig = {
  key: 'root-Swaper',
  storage,
  whitelist: ['sideBar'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const persistor = persistStore(store);
