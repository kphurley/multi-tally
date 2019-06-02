import React, { Component } from 'react';
import _ from 'lodash';

import './App.css';

import { TallyRowContainer } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tallyRows: {
        1: {
          id: 1,
          name: 'Player 1',
          value: 25,
          increment: 1
        },
        2: {
          id: 2,
          name: 'Player 2',
          value: 25,
          increment: 1
        },
        3: {
          id: 3,
          name: 'Willpower',
          value: 0,
          increment: 1
        },
        4: {
          id: 4,
          name: 'Threat',
          value: 0,
          increment: 1
        }
      }
    }
  }

  updateRowState = (row, field, operation) => {
    const rowToEdit = _.find(this.state.tallyRows, (tallyRow) => row.id === tallyRow.id);
    const clonedRow = _.clone(this.state.tallyRows[rowToEdit.id]);
    clonedRow[field] = operation(clonedRow);

    const clonedTallyRows = _.clone(this.state.tallyRows);
    clonedTallyRows[rowToEdit.id] = clonedRow;

    this.setState({
      tallyRows: clonedTallyRows
    });
  }

  handleDecrement = (row) => {
    this.updateRowState(row, 'value', (row) => row.value - row.increment);
  }

  handleDecrementByValue = (row, value) => {
    this.updateRowState(row, 'value', (row) => row.value - value);
  }

  handleIncrement = (row) => {
    this.updateRowState(row, 'value', (row) => row.value + row.increment);
  }

  handleIncrementByValue = (row, value) => {
    this.updateRowState(row, 'value', (row) => row.value + value);
  }

  updateFieldName = (row, name) => {
    this.updateRowState(row, 'name', (row) => name);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          { /*
            TODO - Build a header with some settings
          */}
        </div>
        <TallyRowContainer
          handleDecrement={ this.handleDecrement }
          handleDecrementByValue={ this.handleDecrementByValue }
          handleIncrement={ this.handleIncrement }
          handleIncrementByValue={ this.handleIncrementByValue }
          rows={ this.state.tallyRows }
          setIncrement={ this.setIncrement }
          updateFieldName= { this.updateFieldName }
        />
        <div className="footer">
          <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> and <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
        </div>
      </div>
    );
  }
}

export default App;
