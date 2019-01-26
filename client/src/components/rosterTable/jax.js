import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './rows.css';
import jax from '../../img/jax.json';

// function rowClassNameFormat(row, rowIdx) {
//     // row is whole row object
//     // rowIdx is index of row
//     return rowIdx  < 4 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
//   }

  class Roster extends React.Component {
    render() {
        console.log(jax.jax)
        const rosters = jax.jax

      return (
        <BootstrapTable 
        data={ rosters } 
        hover
        condensed 
        trClassName= {rowClassNameFormat}
        >

        <TableHeaderColumn dataField='name'isKey>Player Name</TableHeaderColumn>
        <TableHeaderColumn dataField='skills'isKey>Position</TableHeaderColumn>

        </BootstrapTable>
      );
    }
  }

export default Roster;