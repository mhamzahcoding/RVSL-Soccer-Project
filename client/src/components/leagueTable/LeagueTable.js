import React, { Component } from 'react'
//import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Jumbotron } from 'react-bootstrap'
import Table from './Columns';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import ErrorBoundary from '../../components/errorboundaries';

//import { Card } from 'react-bootstrap'
///import {Container}  from 'react-bootstrap'
//import axios from 'axios';
//import classnames from 'classnames';


class LeagueTable extends Component {
      render() {  

        return (
            <ErrorBoundary>
            <Jumbotron>
                <Table/>
            </Jumbotron>
        </ErrorBoundary>
        )
    }
}

export default LeagueTable;