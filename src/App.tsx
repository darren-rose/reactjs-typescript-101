import React from 'react';
import './App.css';
import Hello from './Hello';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Joe" enthusiasmLevel={120} />
      </header>
    </div>
  );
}

export default App;
