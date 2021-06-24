import React, { Component} from 'react';
import {Button, Form, Container, Header, Icon} from 'semantic-ui-react';
import axios from 'axios';
import './App.css';
import RetrieveData from './RetreiveData';
export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name:'',
      age:'',
      salary:'',
      hobby:''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  }

  saveDataToGoogleSheet(x){
    axios.post(
      'https://sheet.best/api/sheets/a0fb5d03-7bb8-4981-bd4e-35d5acc2bcd1',
       x)
     .then(response => {
       console.log(response);
     });  
  }

  

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.saveDataToGoogleSheet(this.state);
    // General Syntax: axios.post('url',this.state);

    // axios.post(
    //       'https://sheet.best/api/sheets/a0fb5d03-7bb8-4981-bd4e-35d5acc2bcd1',
    //        this.state )
    //      .then(response => {
    //        console.log(response);
    //      });

    <RetrieveData/>

  }
  
  render(){
    const {name, age, salary, hobby } = this.state;
      return(
        <Container fluid className="container">
          <Header as="h2" className="header">React Google Sheets!</Header>
            <Form className="form" onSubmit={ this.submitHandler }>

              <Form.Field>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" name="name" value= { name } onChange={ this.changeHandler }/>
              </Form.Field>

              <Form.Field>
                <label>Age</label>
                <input type="text" placeholder="Enter your age" name="age" value= { age } onChange={ this.changeHandler }/>
              </Form.Field>

              <Form.Field>
                <label>Salary</label>
                <input type="text" placeholder="Enter your salary" name="salary" value= { salary } onChange={ this.changeHandler } />
              </Form.Field>

              <Form.Field>
                <label>Hobby</label>
                <input type="text" placeholder="Enter your hobby" name="hobby" value= { hobby } onChange={ this.changeHandler }/>
              </Form.Field>

             <Button animated="vertical" fluid color="blue" type="submit">
                <Button.Content visible>Submit</Button.Content>
                <Button.Content hidden>
                  <Icon name='sign in alternate'></Icon>
                </Button.Content>
              </Button>
            </Form>
            </Container>
      );
  }
}