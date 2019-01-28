import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import league from '../../img/league';
import './rows.css';
// import {Link} from 'react-router-dom';


function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    return rowIdx  < 4 ? 'td-column-function-even-example' : 'td-column-function-odd-example';


  }

class Table extends React.Component {
    render() {
        console.log(league.league)
        const teams = league.league

      return (
        <BootstrapTable 
        data={ teams } 
        hover
        condensed 
        trClassName= {rowClassNameFormat}
        >
          <TableHeaderColumn dataField='position'isKey className="bg-info">POS</TableHeaderColumn>
          
          <TableHeaderColumn dataField='name' className="bg-info"> Team Name  </TableHeaderColumn>
        
          <TableHeaderColumn dataField='wins' className="bg-info">Wins</TableHeaderColumn>

          <TableHeaderColumn dataField='ties' className="bg-info">Ties</TableHeaderColumn>

          <TableHeaderColumn dataField='losses' className="bg-info">Losses</TableHeaderColumn>

          <TableHeaderColumn dataField='points' className="bg-info">points</TableHeaderColumn>
          
        </BootstrapTable>
      );
    }
  }

export default Table