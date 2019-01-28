import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import fixture from '../../img/fixtures';
import './fixtures.css';

// function rowClassNameFormat(row, rowIdx) {
//     // row is whole row object
//     // rowIdx is index of row
//     return rowIdx  < 4 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
//   }

  class Roster extends React.Component {
    render() {
        console.log(fixture.fixture)
        const upcoming = fixture.fixture

      return (
        <BootstrapTable 
        data={ upcoming } 
        hover
        condensed 
        // trClassName= {rowClassNameFormat}
        >
        <TableHeaderColumn dataField='game'isKey columnClassName='td-column-string-example, td-header-string-example'>Game No.</TableHeaderColumn>
        <TableHeaderColumn dataField='date'columnClassName='td-column-string-example, td-header-string-example'>Date</TableHeaderColumn>
        <TableHeaderColumn dataField='away'columnClassName='td-column-string-example, td-header-string-example'>Away Team</TableHeaderColumn>
        <TableHeaderColumn dataField='home'columnClassName='td-column-string-example, td-header-string-example'>Home Team</TableHeaderColumn>
        <TableHeaderColumn dataField='location' columnClassName='td-column-string-example, td-header-string-example'>Location</TableHeaderColumn>

        </BootstrapTable>
      );
    }
  }

export default Roster;