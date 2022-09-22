import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer : persistedReducer
});

export const persistor = persistStore(store);

export default store;