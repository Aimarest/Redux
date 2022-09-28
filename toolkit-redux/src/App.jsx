import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
 
const { counter } = useSelector( state => state.counter )
const dispatch = useDispatch();

  return (
    <div className="App">
      <header className='App-header'>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>count is { counter }</p>
        <p className="card">
          <button onClick={() => dispatch( increment() )}>
           increment
          </button>
          <button onClick={() => dispatch( decrement() )}>
           decrement
          </button>
          <button onClick={() => dispatch( incrementBy(2) )}>
           Increment by 2
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
