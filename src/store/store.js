// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    up(state) {
      state.counter++; // toollkit naudoja immer paketa tam kad nemutuotu o atnaujintu reiksmes taip kaip reikia reduceryje
    },
    down(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initAuthState = { isAuthenticated: false };

createSlice({
  name: 'authentications',
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// console.log('store.js: counterSlice.actions ===', counterSlice.actions);
const store = configureStore({
  reducer: counterSlice.actions,
});
// const store = configureStore(counterSlice);

export const counterActions = counterSlice.actions;
export default store;
