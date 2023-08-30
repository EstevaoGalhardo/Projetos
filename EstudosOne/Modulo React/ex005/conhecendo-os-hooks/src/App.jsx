
import './App.css'
import useCounter from './hocks/useCouter'

function App() {
  const counter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          edit <code>src/App.jsx</code>
        </p>
      </div>
    </>
  )
}

export default App