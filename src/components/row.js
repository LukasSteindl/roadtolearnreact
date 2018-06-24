import React,{ Component } from 'react'

class Row extends Component
{
    render(){
        return (
        <div key = {this.props.item.objectID}>
          <span>{this.props.item.title}</span>
          <span>{this.props.item.author}</span>
          <span><button onClick={()=> {this.props.onDelete(this.props.item.objectID)}}>Delete</button></span>
        </div>
        );
    }

}

export default Row