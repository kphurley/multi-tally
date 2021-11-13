import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import SettingsModal from '../settingsModal/SettingsModal';
import './TallyRow.css';

class TallyRowDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      showModal: false,
      type: null
    }

    this.inputId = uuidv4();
  }

  getModalLabel = () => {
    switch(this.state.type) {
      case "name":
        return "Change Field Name";
      case "value":
        return "Change Value";
      default:
        return "";
    }
  }

  getModalPlaceholder = () => {
    switch(this.state.type) {
      case "name":
        return this.props.name;
      case "value":
        return this.props.value;
      default:
        return "";
    }
  }

  handleShow = (type) => {
    this.setState({ type, showModal: true });
  }

  handleHide = () => {
    switch(this.state.type) {
      case "name":
        this.props.updateFieldNameTo(this.state.input);
        break;
      case "value":
        this.props.updateValueTo(parseInt(this.state.input));
        break;
      default:
        break;
    }
    this.setState({ input: null, type: null, showModal: false });
  }

  updateInput = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    const modalLabel = this.getModalLabel();
    const modalPlaceholder = this.getModalPlaceholder();

    const modal = this.state.showModal ? (
      <SettingsModal>
        <div className="settings-modal-content padding">
          <div className="padding">
            <label htmlFor={ this.inputId }>{ modalLabel }</label>
          </div>
          <div className="padding">
            <input 
              type={ this.state.type === "value" ? "number" : "text" }
              id={ this.inputId }
              placeholder={ modalPlaceholder }
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
        <div className="TallyRow-name" onClick={() => this.handleShow("name")}>
          { this.props.name }
        </div>
        <div className="TallyRow-value" onClick={() => this.handleShow("value")}>
          { this.props.value }
        </div>
        { modal }
      </div>
    );
  }
}

export default TallyRowDisplay;
