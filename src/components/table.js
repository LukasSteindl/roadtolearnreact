import React,{ Component } from 'react'
import Row from './row'

class Table extends Component {
// constructor (props) {
//   super(props)
//   const {result} = props
// }

  render () {
    return (
      <div key='table1'>
        {
          this.props.result.hits.map(item => <Row item = {item} onDelete={this.props.onDelete}/>)
        }
      </div>
    )
  }
}

export default Table
