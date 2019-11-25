import React from 'react';
import AddButton from "./AddButton";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addButtonRef = React.createRef();
    this.minusButtonRef = React.createRef();
  }

  componentDidMount() {
    this.addButtonRef.current.addEventListener('click', this.handleAdd);
    console.log("ADD: ", this.addButtonRef);

    this.minusButtonRef.current.addEventListener('click', this.handleMinus);
    console.log("MINUS: ", this.minusButtonRef);
  }

  handleAdd = () => {
    console.log('added');
  };

  handleMinus = () => {
    console.log('minused');
  };

  render() {
    return (
      <React.Fragment>
        <h2>Counter </h2>
        <AddButton ref={this.addButtonRef} />
        <button ref={this.minusButtonRef}>MINUS</button>
      </React.Fragment>
    )
  }
}

export default Counter;
