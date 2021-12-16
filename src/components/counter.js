import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return(
      <div className="counter_container">
        <div className="counter_title">
          Counter
        </div>
        <div className="counter_content">
          <textarea className="counter_text" readOnly={true} value={this.state.count}></textarea>
          <button className="counter_button" onClick={() => this.increaseCount()}>Count</button>
        </div>
      </div>
    );
  }
}

export default Counter;