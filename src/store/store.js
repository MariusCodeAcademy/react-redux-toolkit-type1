import { createStore } from 'redux';
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

// const counterReducer = (state = initState, action) => {
//   // console.log(state, action);
//   switch (action.type) {
//     case 'UP':
//       // state.counter++; // niekada nemutuoti state, visada grazinti pakeista kopija
//       // return state;
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'DOWN':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'UP_BY':
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case 'TOGGLE':
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// console.log('store.js: counterSlice.actions ===', counterSlice.actions);
// const store = configureStore({
//   reducer: counterSlice.actions,
// });
const store = configureStore(counterSlice);

export const counterActions = counterSlice.actions;
export default store;
