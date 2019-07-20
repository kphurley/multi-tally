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

    const addRowToElements = (row) => {
      tallyRowElements.push(this.createButton(row, 'decrement', this.props.handleDecrement));

      if (this.props.options.multiChange) {
        tallyRowElements.push(this.createButton(row, 'decrementMany', this.props.handleDecrementByValue));
      }

      tallyRowElements.push(this.createDisplay(row));

      if (this.props.options.multiChange) {
        tallyRowElements.push(this.createButton(row, 'incrementMany', this.props.handleIncrementByValue));
      }
      
      tallyRowElements.push(this.createButton(row, 'increment', this.props.handleIncrement));
    }

    _.forEach(this.props.rows, addRowToElements);

    return tallyRowElements;
  }

  render() {
    return (
      <div 
        className="TallyRowContainer"
        style={{
          gridTemplateColumns: this.props.options.multiChange
            ? "1fr 1fr 1.5fr 1fr 1fr"
            : "1fr 1.5fr 1fr"
        }}
      >
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
  options: PropTypes.object,
  rows: PropTypes.object,
  updateFieldName: PropTypes.func
}

export default TallyRowContainer;