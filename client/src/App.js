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


    
  checkfilter = (currentid,idtodelete) => 
  {
    return currentid !== idtodelete
  }


  onChange =(event)=>
  {
    console.log("changed!" + event.target.value);

    this.setState({searchTerm: event.target.value});
  } 

  onDelete = (id)=>
  {
    console.log('Delete' + id);
    
    const filteredList = this.state.result.hits.filter((item)=> { return this.checkfilter(item.objectID,id)});
    const resultcopy = this.state.result;
    resultcopy.hits = filteredList
    this.setState({result: resultcopy});
  }

  setSearchTopStories = (result) => 
  {
    console.log('setsearchresult');
    console.log(result);
    this.setState({result});
  }


  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  Login = () => {
    

  };

  componentDidMount(){
    console.log('component mounted');
    const {searchTerm} = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`).then(response=> response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);

    this.callApi()
    .then(res => {
      this.setState({ response: res.express })
      console.log('output of express api call..' + res.express);
      })
    .catch(err => console.log('error calling express service:' + err));
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
        <h1> {this.state.response}</h1>
      
        <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        </nav>
        <div>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/" exact render={()=>(<NewsPanel 
              result = {this.state.result} 
              onChange ={this.onChange} 
              searchTerm={this.state.searchTerm}
              onDelete = {this.onDelete}
              />)}/>
        </div>
      </div>
    );
  }
}

export default App;


const Dashboard = () => (
  <div>My crazy Dashboard </div>
)


const Login = () => (
  <div>
    <h1>Login</h1>
    <button onClick={this.Login}>Login</button>
        <button onClick={this.Login}>Logout</button>
  </div>
)