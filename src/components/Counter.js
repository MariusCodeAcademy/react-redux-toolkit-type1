import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // issitraukiam is state tai ko mums reikia  == counter
  const counter = useSelector((state) => state.counter); // sukuria subscription automatiskai
  const showC = useSelector((state) => state.showCounter); // sukuria subscription automatiskai

  // veiksmams is store vygdyti naudojam useDispatch()
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch({ type: 'UP' });
  };

  const increaseCounterHandler = () => {
    dispatch({ type: 'UP_BY', amount: 5 });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: 'DOWN' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showC && <div className={classes.value}>{counter}</div>}
      {showC && (
        <div>
          <button onClick={incrementCounterHandler}>Up</button>
          <button onClick={increaseCounterHandler}>Up by 5</button>
          <button onClick={decrementCounterHandler}>Down</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
