import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Jumbotron } from 'react-bootstrap'
//import { Card } from 'react-bootstrap'
///import {Container}  from 'react-bootstrap'
//import axios from 'axios';
//import classnames from 'classnames';


class LeagueTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        const url = "https://api.myjson.com/bins/w0alo";
        fetch(url,{ 
        method: "GET"
    }).then(res => res.json())          // convert to plain text
    .then(posts => {
        console.log(posts) 
        this.setState({posts: posts     // set state
        },
        function(){
            console.log(this.state)
        })   
        })
      
    }


  render() {
      const columns = [
      
          {
            Header: "POS",
            id: "row",
            maxWidth: 50,
            filterable: false,
            Cell: (row) => {
              return <div>{row.index+1}</div>;
            }
          },
          {
            Header: "Team Name",
            accessor: "name",
            maxWidth: 200
          },
          {
            Header: "ID",
            accessor: "id",
            maxWidth: 50

          },
    
        ]
      return(
        <Jumbotron>
             
                <ReactTable
                    columns={columns}
                    data={this.state.posts}
                >
                </ReactTable>

        </Jumbotron>
      )
  }
}

export default LeagueTable;