import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NewsPanel from './components/newspanel';
import {Link,Route} from 'react-router-dom';

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

    return (
      <div className="App">
        <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
        </nav>
        <div>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" exact render={()=>(<NewsPanel result = {this.state.result} onChange ={this.onChange} searchTerm={this.state.searchTerm}/>)}/>
        </div>
      </div>
    );
  }
}

export default App;


const Dashboard = () => (
  <div>My crazy Dashboard </div>
)