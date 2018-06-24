import React,{ Component } from 'react'
import Row from './row'

class Table extends Component {
// constructor (props) {
//   super(props)
//   const {result} = props
// }

  render () {
    return (
      this.props.result.hits.map(item =>
        <div key = {item.objectID}>
            <Row item = {item}/>
        </div>
      )
    )
  }
}

export default Table
