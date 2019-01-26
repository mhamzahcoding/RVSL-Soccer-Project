import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import tigers from '../../img/tigers';

// function rowClassNameFormat(row, rowIdx) {
//     // row is whole row object
//     // rowIdx is index of row
//     return rowIdx  < 4 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
//   }

  class TigersRoster extends React.Component {
    render() {
        console.log(tigers.tigers)
        const rosters = tigers.tigers

      return (
        <BootstrapTable 
        data={ rosters } 
        hover
        condensed 
        // trClassName= {rowClassNameFormat}
        >
        <TableHeaderColumn dataField='position'isKey>Jersey No.</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Player Name</TableHeaderColumn>
        <TableHeaderColumn dataField='skills'>Position</TableHeaderColumn>

        </BootstrapTable>
      );
    }
  }

export default TigersRoster;