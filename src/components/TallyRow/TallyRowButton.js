import React, { Component } from 'react';
import PropTypes from 'prop-types';

import incrementButton from './rounded-add-button.png';
import decrementButton from './round-remove-button.png';
import zoomInButton from './zoom-in.png';
import zoomOutButton from './zoom-out.png';

import './TallyRow.css';

class TallyRowButton extends Component {
  iconNameToFileMapping = {
    increment: incrementButton,
    incrementMany: zoomInButton,
    decrement: decrementButton,
    decrementMany: zoomOutButton
  }

  getIcon(name) {
    if (!this.iconNameToFileMapping[name]) return;

      return (
        <img
          alt={`${name}-button`}
          src={ this.iconNameToFileMapping[name] } 
        />
      );
  }

  render() {
    return (
      <div className="TallyRow-button" onClick={ this.props.clickHandler }>
        { this.getIcon(this.props.icon) }
      </div>
    );
  }
}

TallyRowButton.propTypes = {
  clickHandler: PropTypes.func,
  icon: PropTypes.string
}

export default TallyRowButton;
