import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import SettingsModal from '../settingsModal/SettingsModal';
import './TallyRow.css';

class TallyRowDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      showModal: false
    }

    this.inputId = uuidv4();
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  handleHide = () => {
    this.props.updateFieldNameTo(this.state.input);
    this.setState({ showModal: false });
  }

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    const modal = this.state.showModal ? (
      <SettingsModal>
        <div className="settings-modal-content padding">
          <div className="padding">
            <label htmlFor={ this.inputId }>Change Field Name</label>
          </div>
          <div className="padding">
            <input 
              type="text"
              id={ this.inputId }
              placeholder={ this.props.name }
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
        <div className="TallyRow-name" onClick={this.handleShow}>
          { this.props.name }
        </div>
        <div className="TallyRow-value">
          { this.props.value }
        </div>
        { modal }
      </div>
    );
  }
}

export default TallyRowDisplay;
