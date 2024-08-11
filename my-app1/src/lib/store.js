import { combineReducers, configureStore } from '@reduxjs/toolkit';
import featureReducer from '@/redux/feature/featureReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage"

export const rootReducer = combineReducers({
    features: featureReducer
});

const persistConfig = { key: 'root', version: 1, storage }
const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  })
}

export const store = makeStore();
persistStore(store);