import React,{ Component } from 'react'

class Row extends Component
{
    render(){
        return (
         <div>
          <span>{this.props.item.title}</span>
          <span>{this.props.item.author}</span>
        </div>
        );
    }

}

export default Row