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
      />
    );
  }

  createButton(row, icon, clickHandler) {
    return (
      <TallyRowButton
        clickHandler={ () => clickHandler(row) }
        icon={ icon }
      />
    )
  }


  // Take the rows and parse them into:
  // 1. A decrement button
  // 2. The display
  // 3. An increment button
  // Ensuring that each of the three elements is created with the correct click handler
  parseRowsIntoElements() {
    const tallyRowElements = [];

    _.forEach(this.props.rows, (row) => {
      tallyRowElements.push(this.createButton(row, 'decrement', this.props.handleDecrement));
      tallyRowElements.push(this.createButton(row, 'decrementMany', this.props.handleDecrement));
      tallyRowElements.push(this.createDisplay(row));
      tallyRowElements.push(this.createButton(row, 'incrementMany', this.props.handleIncrement));
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
  handleIncrement: PropTypes.func,
  rows: PropTypes.object
}

export default TallyRowContainer;