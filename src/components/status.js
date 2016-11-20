import React from 'react';


function Status(props) {
  if (props.winner) {
    return <div>Winner: {props.winner}</div>;
  } else {
    return <div>Next player: {props.nextPlayer}</div>;
  }
}

export default Status;
