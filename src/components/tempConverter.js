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
    this.setState({[event.target.name]: event.target.value});
    if (event.target.value === '' || isNaN(event.target.value)) {
      return;
    }
    
    let temp;
    let ans;
    
    if (event.target.name === 'fahrenheit' ) {
      temp = 'celsius'
      ans = (event.target.value - 32) * (5/9);
    } else {
      temp = 'fahrenheit'
      ans = event.target.value * (9/5) + 32;
    }

    ans = ans.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
    this.setState({[temp]: ans});
  }

  render() {
    return(
      <div className="tempConv_container">
        <div className="tempConv_title">
          Temp Converter
        </div>
        <div className="tempConv_content">
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