import React, { Component } from 'react';
import PropTypes from 'prop-types';

import incrementButton from './rounded-add-button.png';
import decrementButton from './round-remove-button.png';
import './TallyRow.css';

class TallyRowButton extends Component {
  getIcon() {
    switch (this.props.icon) {
      case 'increment':
        return (
          <img
            alt="increment button"
            src={ incrementButton } 
          />
        );
      case 'decrement':
        return (
          <img
            alt="decrement button"
            src={ decrementButton }
          />
        );
      default:
        return;
    }
  }
  
  render() {
    return (
      <button 
        className="TallyRow-button"
        onClick={ this.props.clickHandler }
        type="number"
      >
        { this.getIcon() }
      </button>
    );
  }
}

TallyRowButton.propTypes = {
  clickHandler: PropTypes.func,
  icon: PropTypes.string
}

export default TallyRowButton;
