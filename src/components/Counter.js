import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // issitraukiam is state tai ko mums reikia  == counter
  const counter = useSelector((state) => state.counter); // sukuria subscription automatiskai

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
