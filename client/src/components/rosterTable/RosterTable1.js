import React, { Component } from 'react'
//import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Jumbotron } from 'react-bootstrap'
import Roster from './tigers';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import ErrorBoundary from '../../components/errorboundaries';


class RosterTable1 extends Component {
    render() {  

      return (
          <ErrorBoundary>
          <Jumbotron>
            <div>
                <p style={{ fontWeight: "bold", textAlign: "center"}}>
                    Tigers Roster
                </p>
            </div>
              <Roster/>
          </Jumbotron>
      </ErrorBoundary>
      )
  }
}

export default RosterTable1;