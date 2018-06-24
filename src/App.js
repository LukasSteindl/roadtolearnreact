import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './components/table';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

class App extends Component {
  

  constructor(props)
  {
    super(props);
    const list = [
      {id:1, name:'joe'},
      {id:2, name:'jack'}
    ]
    this.state = {
      list: list ,
      searchTerm: ''
    }
  }


  checkfilter = (currentid,idtodelete) => 
  {
    return currentid !== idtodelete
  }

  hallo = (id ) => 
  {
    console.log(this);
    console.log('hallo!!' + id);
    const filteredList = this.state.list.filter((item)=> { return this.checkfilter(item.id,id)});
    this.setState({list:filteredList});
  }

//test
  onChange =(event)=>
  {
    console.log("changed!" + event.target.value);
    this.setState({
      searchTerm: event.target.value,
    })
  } 

  setSearchTopStories = (result) => 
  {
    this.setState({result});
  }

  componentDidMount(){
    const {searchTerm} = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`).then(response=> response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  render() {
    const text = 'hallo welt!';
    const {result} = this.state;
    const complexObject = {
      javaobject: 'json text'

    };

    //wichtig dass beim ersten rendern bereits die daten geladen wurden sonst soll nichts gezeichnet werden!
    if (!result) {
      console.log('result empty');
      return null;}
    console.log(result.hits);


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
       <Table result = {this.state.result}/>
       
      
      </div>
    );
  }
}

export default App;
