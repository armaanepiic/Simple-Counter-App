import { useState } from 'react';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('Increment clicked');
    setCount((count) => count + 1)
  }
  const handleDecrement = () => {
    console.log("Decrement clicked");
    setCount((count) => count - 1);
  } 
  const reset = () => {
    console.log("Reset clicked");
    setCount(0);
  }; 

  return (
    <div className='counter'>
      <h1>Count:{count}</h1>
      <div className='btn'>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
