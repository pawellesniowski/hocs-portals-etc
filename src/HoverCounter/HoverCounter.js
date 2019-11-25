import React, {Component} from 'react';
import basicHOC from '../hocs/basicHOC';

class HoverCounter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1};
    })
  };

  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>Hover Counter</h2>
        <div onMouseOver={this.incrementCount}>Hover {count} times by {this.props.name}</div>
      </div>
    )
  }
}

export default basicHOC(HoverCounter);
