import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;