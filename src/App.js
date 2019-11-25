import React, {Component} from 'react';
import ClickCounter from "./ClickCounter/ClickCounter";
import HoverCounter from "./HoverCounter/HoverCounter";
import KeyPressCounter from "./KeyPressCounter/KeyPressCounter";
import KeyPressCounter2 from "./KeyPressCounter/KyePressCounter2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HOCs</h1>
        <section>
          <ClickCounter/>
          <HoverCounter/>
          <KeyPressCounter/>
          <KeyPressCounter2 name="Paweł Leśniowski"/>
        </section>
      </div>
    )
  }
}

export default App;
