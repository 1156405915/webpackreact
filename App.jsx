import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table.jsx'

function App() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]
  return (
    <div className="App">
      <Table characterData={characters}  /> 
    </div>
  );
}

export default App;
