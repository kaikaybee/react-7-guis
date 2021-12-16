import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import TempConverter from './components/tempConverter';
import FlightBooker from './components/flightBooker'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
