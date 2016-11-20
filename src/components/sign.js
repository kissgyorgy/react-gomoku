import React from 'react';

function Sign(props){
  const color = (props.player === 'X') ? 'green' : 'red';
  return <span className={color}> {props.player} </span>
}

export default Sign;
