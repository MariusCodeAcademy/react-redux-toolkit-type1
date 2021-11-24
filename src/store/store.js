import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'UP':
      return { counter: state.counter + 1 };
    case 'DOWN':
      return { counter: state.counter - 1 };
    case 'UP_BY':
      return { counter: state.counter + action.amount };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
