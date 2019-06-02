import { Component } from 'react';
import ReactDOM from 'react-dom';

import './settingsModal.css';

class SettingsModal extends Component {
  constructor(props) {
    super(props);

    this.modalRoot = document.getElementById('modal');
    this.el = document.createElement('div');
    this.el.className = 'settings-modal';
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default SettingsModal;