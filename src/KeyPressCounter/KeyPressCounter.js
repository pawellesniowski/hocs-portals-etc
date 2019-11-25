import React, {Component} from 'react';
import withCounter from "../hocs/withCounter";

class KeyPressCounter extends Component {
  // this olso goes to hoc
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   }
  // }

  // moved this method to incrementCountHOC
  // incrementCount = () => {
  //   this.setState(prevState => {
  //     return { count: prevState.count + 1};
  //   })
  // };

  render() {
    const {count, incrementCount} = this.props;
    return (
      <div>
        <h2>KeyPressCounter</h2>
        <input type="text" onKeyPress={incrementCount}/>
        <p>you entered {count} symbols</p>
      </div>
    )
  }
}

export default withCounter(KeyPressCounter);
