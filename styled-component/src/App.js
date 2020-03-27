import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button huge>
        Click 
        <span> Yes</span>
        <span className='second-span'> No</span>
      </Button>
    </div>
  );
}

export default App;
