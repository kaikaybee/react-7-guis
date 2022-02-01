import React from 'react';
import './tempConverter.css';

class TempConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: 0,
      celsius: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // update state
    this.setState({[event.target.name]: event.target.value}); 

    // select temperatures
    let tempA = event.target.name;
    let tempB;

    if (tempA === 'fahrenheit') {
      tempB = 'celsius';
    } else {
      tempB = 'fahrenheit';
    }

    // calculate and set tempB value
    let ans;
    if (event.target.value === '' || isNaN(event.target.value)) {
      ans = '';
    } else {
      if (tempA === 'fahrenheit') {
        ans = (event.target.value - 32) * (5/9);
      }
      else {
        ans = event.target.value * (9/5) + 32;
      }
      ans = ans.toLocaleString('en-US', {
        maximumFractionDigits: 2,
      });
    }

    this.setState({[tempB]: ans});    
  }

  render() {
    return(
      <div className="gui_container">
        <div className="gui_title">
          Temp Converter
        </div>
        <div className="gui_content tempConv_content">
          <textarea className="tempConv_temperature" name="fahrenheit" value={this.state.fahrenheit} onChange={this.handleChange} />
          <div className="tempConv_text">Fahrenheit =</div>
          <textarea className="tempConv_temperature" name="celsius" value={this.state.celsius} onChange={this.handleChange}></textarea>
          <div className="tempConv_text">Celsius</div>
        </div>
      </div>
    );
  }
}

export default TempConverter;