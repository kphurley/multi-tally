import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import SettingsModal from '../settingsModal/SettingsModal';

import incrementButton from './rounded-add-button.png';
import decrementButton from './round-remove-button.png';
import zoomInButton from './zoom-in.png';
import zoomOutButton from './zoom-out.png';

import './TallyRow.css';

class TallyRowButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      showModal: false
    }

    this.inputId = uuidv4();
  }

  iconNameToFileMapping = {
    increment: {
      button: incrementButton
    },
    incrementMany: {
      button: zoomInButton,
      hasModal: true
    },
    decrement: {
      button: decrementButton
    },
    decrementMany: {
      button: zoomOutButton,
      hasModal: true
    }
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleHide = () => {
    this.props.clickHandler(this.state.input);
    this.setState({ showModal: false });
  }

  handleButtonClick = () => {
    this.iconNameToFileMapping[this.props.icon].hasModal ?
      this.handleShow() : this.props.clickHandler();
  }

  updateInput = (event) => {
    if (!event.target.validity.valid) return;

    this.setState({ input: Number(event.target.value) });
  }


  getIcon(name) {
    if (!this.iconNameToFileMapping[name]) return;

      return (
        <img
          alt={`${name}-button`}
          src={ this.iconNameToFileMapping[name].button } 
        />
      );
  }

  render() {
    const modal = this.state.showModal ? (
      <SettingsModal>
        <div className="settings-modal-content padding">
          <div className="padding">
            <label htmlFor={ this.inputId }>Change amount</label>
          </div>
          <div className="padding">
            <input 
              type="text"
              pattern="[0-9]*"
              id={ this.inputId }
              onChange={ this.updateInput }
            />
          </div>
          <div className="padding">
            <button onClick={ this.handleHide }>Done</button>
          </div>
        </div>
      </SettingsModal>
    ) : null;

    return (
      <div>
        <div className="TallyRow-button" onClick={ this.handleButtonClick }>
          { this.getIcon(this.props.icon) }
        </div>
        {modal}
      </div>
    );
  }
}

TallyRowButton.propTypes = {
  clickHandler: PropTypes.func,
  icon: PropTypes.string
}

export default TallyRowButton;
