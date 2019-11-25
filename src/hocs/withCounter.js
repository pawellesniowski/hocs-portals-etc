// this withCounter HOC will provide incrementCount method to components which go through it.

import React from 'react';

function withCounter(WrappedComponent, incrementNumberExtraParamiter = 1) {
  return (
    class WithCounter extends React.Component {
      // this becomes new functionality for going through components
      constructor(props) {
        super(props);
        this.state = {
          count: 0,
        }
      }

      incrementCount = () => {
        this.setState(prevState => {
          return {count: prevState.count + incrementNumberExtraParamiter};
        })
      };


      render() {
        console.log('from withCounter: ', this.props);

        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
      }
    }
  )
}

export default withCounter;
