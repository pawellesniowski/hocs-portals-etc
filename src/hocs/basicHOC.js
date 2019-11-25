// this basicHOC adds name to props to all component which go through it

import React from 'react';

function basicHOC (OriginalComponent) {

  class NewComponent extends React.Component {
    render(){
      return <OriginalComponent name="Paweł Leśniowski"/>;
    }
  }

  return NewComponent;
}

export default basicHOC;
