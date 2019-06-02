import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TallyRowButton from './TallyRowButton';
import TallyRowDisplay from './TallyRowDisplay';
import './TallyRow.css';

class TallyRowContainer extends Component {
  /*
    tallyRowExample = {
      name: 'A Tally Row',
      value: 0,
      increment: 1
    }
  */
 createDisplay(row) {
    return (
      <TallyRowDisplay
        name={ row.name }
        value={ row.value }
        updateFieldNameTo={ (name) => this.props.updateFieldName(row, name) }
      />
    );
  }

  createButton(row, icon, clickHandler) {
    return (
      <TallyRowButton
        clickHandler={ (value) => clickHandler(row, value) }
        icon={ icon }
      />
    )
  }

  parseRowsIntoElements() {
    const tallyRowElements = [];

    _.forEach(this.props.rows, (row) => {
      tallyRowElements.push(this.createButton(row, 'decrement', this.props.handleDecrement));
      tallyRowElements.push(this.createButton(row, 'decrementMany', this.props.handleDecrementByValue));
      tallyRowElements.push(this.createDisplay(row));
      tallyRowElements.push(this.createButton(row, 'incrementMany', this.props.handleIncrementByValue));
      tallyRowElements.push(this.createButton(row, 'increment', this.props.handleIncrement));
    });

    return tallyRowElements;
  }

  render() {
    return (
      <div className="TallyRowContainer">
        {
          this.parseRowsIntoElements().map((tallyRowElement, index) => {
            return (
              <div className="TallyRowElement" key={ index }>
                { tallyRowElement }
              </div>
            );
          })
        }
      </div>
    );
  }
}

TallyRowContainer.propTypes = {
  handleDecrement: PropTypes.func,
  handleDecrementByValue: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleIncrementByValue: PropTypes.func,
  rows: PropTypes.object,
  updateFieldName: PropTypes.func
}

export default TallyRowContainer;