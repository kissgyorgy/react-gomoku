import React from 'react';


function Square(props) {
  const color = (props.value === 'X') ? 'green' : 'red';
  return (
    <button className="square" onClick={() => props.onClick()}>
      <span className={color}>{props.value}</span>
    </button>
  );
}

export default Square;
