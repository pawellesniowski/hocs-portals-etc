import React, {Component} from 'react';
import withCounter from "../hocs/withCounter";

class KeyPressCounter2 extends Component {
  render() {
    const {count, incrementCount} = this.props;
    console.log('from KeyPressCounter2: ', this.props);
    return (
      <div>
        <h2>KeyPressCounter 2</h2>
        <input type="text" onKeyPress={incrementCount}/>
        <p>you entered {count} symbols</p>
      </div>
    )
  }
}

export default withCounter(KeyPressCounter2, 100);
