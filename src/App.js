import React, {Component} from 'react';
import ClickCounter from "./ClickCounter/ClickCounter";
import HoverCounter from "./HoverCounter/HoverCounter";
import KeyPressCounter from "./KeyPressCounter/KeyPressCounter";
import KeyPressCounter2 from "./KeyPressCounter/KyePressCounter2";
import Counter from "./refs/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>HOCs</h2>
        <section>
          <ClickCounter/>
          <HoverCounter/>
          <KeyPressCounter/>
          <KeyPressCounter2 name="Paweł Leśniowski"/>
        </section>
        <h2>Refs</h2>
        <section>
          <Counter/>
        </section>
      </div>
    )
  }
}

export default App;
