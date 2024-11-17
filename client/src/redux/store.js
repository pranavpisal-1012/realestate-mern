import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer  from './user/userSlice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduer = combineReducers({user: useReducer})  
const persistConfig = {
    key: 'root',
    storage,
    version:1,
}
const persistReducer = persistReducer(persistConfig, rootReduer)
export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

