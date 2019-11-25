import React from 'react';

function AddButton (props, ref) {
  return (
    <button ref={ref}>ADD</button>
  );
}

export default React.forwardRef(AddButton);
