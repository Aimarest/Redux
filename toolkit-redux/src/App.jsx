import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='App-header'>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>Vite + React</p>
        <p className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
