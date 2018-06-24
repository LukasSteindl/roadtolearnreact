import React,{ Component } from 'react'
import Search from './search'
import Table from './table'


class NewsPanel extends Component {


    
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
  

   

    render () {
            
         return (
             <div>
                <h1>News</h1>
                <Search onChange={this.props.onChange} searchTerm={this.props.searchTerm}>filterxy</Search>
                <Table result = {this.props.result}/>
             </div>
        )
    }
}

export default NewsPanel