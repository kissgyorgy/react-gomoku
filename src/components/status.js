import React from 'react';


function Status(props) {
  if (props.winner) {
    return (
      <div>
        Winner: <span className={props.nextPlayer.color}>{props.winner}</span>
      </div>
    );
  } else {
    return (
      <div>
        Next player:&nbsp;
        <span className={props.nextPlayer.color}>
          {props.nextPlayer.sign}
        </span>
      </div>
    );
  }
}

export default Status;
