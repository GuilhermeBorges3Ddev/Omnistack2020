import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>
        Contador: { counter }
        <button onClick={increment}>Incrementar</button>
      </Header>
    </div>
  );
}

export default App;
