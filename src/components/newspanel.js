import React,{ Component } from 'react'
import Search from './search'
import Table from './table'


class NewsPanel extends Component {

    render () {
            
         return (
             <div>
                <h1>News</h1>
                <Search onChange={this.props.onChange} searchTerm={this.props.searchTerm}>filterxy</Search>
                <Table result = {this.props.result} onDelete={this.props.onDelete}/>
             </div>
        )
    }
}

export default NewsPanel