import React, {useEffect, useState, Fragment} from 'react';
import Tabletop from 'tabletop';
import {Header,Table,} from 'semantic-ui-react';
import './tabledata.css';

export default function TableData() {

        const [data, setData] = useState([]);
    
        useEffect(()=> {
            Tabletop.init( {
                    key: "1FKZngiwWQ98iqGi9m-FU6go2ttYM8A5Sw_WsIZOKWhQ",
                    simpleSheet:true

                    })
                    .then((data) => setData(data))
                    .catch((err)=> console.log(err));
        },[]);
        
        return(
        <>
        <Header as="h2" className="header">Customer Data in GoogleSheet!</Header>
        <Table celled inverted selectable className="tableData">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Hobby</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

        <Table.Body>
          { data.map((item, i) => (
            <Fragment key={i}>
                <Table.Row>
                  <Table.Cell>{ item.name }</Table.Cell>
                  <Table.Cell>{ item.age }</Table.Cell>
                  <Table.Cell>{ item.salary }</Table.Cell>
                  <Table.Cell>{ item.hobby }</Table.Cell>
                </Table.Row>
            </Fragment>
          ))}
          </Table.Body>
        </Table>
        </> 
      );   
  }