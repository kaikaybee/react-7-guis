import React from 'react';
import './App.css';
import Counter from './components/counter';
import TempConverter from './components/tempConverter';
import FlightBooker from './components/flightBooker';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>7 GUI exercises in React</h1>
        <div className='counter'>
          <Counter />
        </div>
        <div className='tempConv'>
          <TempConverter />
        </div>
        <div>
          <FlightBooker />
        </div>
      </div>
    )
  }
}

export default App;
