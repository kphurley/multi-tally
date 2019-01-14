import React, { Component } from 'react';
import './TallyRow.css';

class TallyRowDisplay extends Component {
  render() {
    return (
      <div>
        <div className="TallyRow-name">
          { this.props.name }
        </div>
        <div className="TallyRow-value">
          { this.props.value }
        </div>
      </div>
    );
  }
}

export default TallyRowDisplay;
