
import { useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const addValue = () => {
      setValue((nextval) => {
        if(nextval < 20){
          console.log('Value added:', nextval+1);
          return nextval + 1;
        }
        return nextval;
      });
    }

  const removeValue = () => {
      setValue((prevval) => {
        if(prevval > 0){
          console.log('Value removed:', prevval-1);
          return prevval - 1;
        }
        return prevval;
      });
    }
   return (
    <>
      <h1>Explore React</h1>
      <h2>Counter: {value}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
