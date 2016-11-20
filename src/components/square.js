import React from 'react';
import Sign from './sign';


function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      <Sign player={props.value} />
    </button>
  );
}

export default Square;
