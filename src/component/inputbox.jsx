import React,{Component} from 'react'

export default class Inputbox extends Component {
  
  render() {
    return (
      <div>
          <input value={this.props.value} onChange={this.props.onChange}></input>
        </div>
    )
  }
  
}
