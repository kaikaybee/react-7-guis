import React from 'react';
import './flightBooker.css';

class FlightBooker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="flightBooker_container">
        <div className="flightBooker_title">
          Flight Bookerr
        </div>
        <div className="flightBooker_content">
          <div className="flightBooker_flightType"></div>
          <div className="flightBooker_startDate"></div>
          <div className="flightBooker_returnDate"></div>
        </div>
      </div>
    );
  }
}

export default FlightBooker;