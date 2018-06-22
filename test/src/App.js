import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title";
import Form from "./components/Form";
import FormPost from "./components/FormPost";

import Api from "./components/Api";

class App extends Component {
  
  state = {
    email: undefined,
    name: undefined
    
  }
  
  getData = async(e) =>{
    e.preventDefault();
    //GET is working
    const user = e.target.elements.user.value;
    //const email = e.target.elements.email.value;
    //const api_call = await fetch(`http://gsc-ice-wolf.c9users.io:8082/user`);
    const api_call = await fetch(`http://gsc-ice-wolf.c9users.io:8082/user?q={"filters":[{"name":"name","op":"eq","val":"${user}"}]}`);
    const data = await api_call.json();
    console.log(data);
    
    if(user ){//hve to do check based on returned json
      this.setState({
        email:data.objects[0].email,
        name:data.objects[0].name
      })
    }else{
      this.setState({
        email:undefined,
        name:undefined,
        error:"No data returned"
      })
    }
    
    //POST working, but reactjs giving probs
   /* const user = e.target.elements.user.value
    const headers =  new Headers()
    headers.append('Content-Type', 'application/json')//'application/vnd.api+json'
    const body= JSON.stringify(	
         {	
  
	       "email": "davidtest5@test.com",
	       "name": "david"
         }
	       )
    const options = {
      method: 'POST',
      headers,
      body
    }
    const request = new Request('http://gsc-ice-wolf.c9users.io:8082/user',options)
    console.log(request);
    const response = await fetch(request);
    const status = await response.status;
    console.log(response);
    */
    
    
    
  }
  
 sendData = async(e) =>{
   
    e.preventDefault();
    //POST working, but reactjs giving probs
    //const user = e.target.elements.senduser.value
    const headers =  new Headers()
    headers.append('Content-Type', 'application/json')//'application/vnd.api+json'
    const body= JSON.stringify(	
         {	
  
	       "email": "davidtest5@test.com",
	       "name": "david"
         }
	       )
    const options = {
      method: 'POST',
      headers,
      body
    }
    const request = new Request('http://gsc-ice-wolf.c9users.io:8082/user',options)
    console.log(request);
    const response = await fetch(request);
    //const status = await response.status;
    console.log(response);
    
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Title/>
        <Form getData={this.getData}/>
        <Api 
          email={this.state.email}
          user={this.state.name}
        />
         <FormPost sendData={this.sendData}/>
      </div>
    );
  }
}

export default App;
