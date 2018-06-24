import React,{ Component } from 'react'
import Row from './row'

class Table extends Component {
// constructor (props) {
//   super(props)
//   const {result} = props
// }

  render () {
    //console.log('Output table data:');
    //const y = 'ABC'
    //console.log('checkincludes: ' + y.includes('B'));
    //console.log(this.props.result.hits);
    //this.props.result.hits.map(x => x.title !== null ? console.log(x.title.includes(this.props.searchTerm)): console.log(x.title))
    //this.props.result.hits.filter(x => x != null? x.title.includes(this.props.searchTerm):1)
    //console.log(this.props.result.hits.map(x => console.log(x.title)));
    return (
      <div key='table1'>
        {
             
          this.props.result.hits.filter(x => x.title !== null ? x.title.includes(this.props.searchTerm): false).map(item => <Row item = {item} onDelete={this.props.onDelete}/>)
        }
      </div>
    )
  }
}

export default Table
