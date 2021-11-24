import { createStore } from 'redux';

const initState = { counter: 0, showCounter: true };

const counterReducer = (state = initState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'UP':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case 'DOWN':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'UP_BY':
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case 'TOGGLE':
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
