import React from 'react';
import Sign from './sign';


function Status(props) {
  if (props.winner) {
    return <div> Winner: <Sign player={props.winner} /> </div>;
  } else {
    return <div> Next player: <Sign player={props.nextPlayer} /> </div>;
  }
}

export default Status;
