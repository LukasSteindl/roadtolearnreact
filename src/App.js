import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  

  constructor(props)
  {
    super(props);
    const list = [
      {id:1, name:'joe'},
      {id:2, name:'jack'}
    ]
    this.state = {
      list: list,
    }
  }


  checkfilter = (currentid,idtodelete) => 
  {
    return currentid !== idtodelete 
  }

  hallo = (id) => 
  {
    console.log(this);
    console.log('hallo!!' + id);
    const filteredList = this.state.list.filter((item)=> { return this.checkfilter(item.id,id)});
    this.setState({list:filteredList});
  }


  onChange =(event)=>
  {
    console.log("changed!" + event.target.value);
  } 

  render() {
    const text = 'hallo welt!';
    const complexObject = {
      javaobject: 'json text'

    };

  const Search = ({children, onChange}) => { return (<form> Search{children} <input type="text" onChange={onChange}/></form>)}

    return (
      <div className="App">
        <h1>{text}{complexObject.javaobject}</h1>
        <Search onChange={this.onChange}>filterxy</Search>
        {
          this.state.list.map(item => 
          <div key ={item.id}>
          <span> {item.name}</span>
          <button onClick={()=> this.hallo(item.id)}>Hallo Button</button>
          </div>
          )
        }
      
      </div>
    );
  }
}

export default App;
