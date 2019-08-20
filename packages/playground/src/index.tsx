import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello';

const App = () => (
  <div>
    <h1>Playground</h1>
    <Hello />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))