import React from 'react';


function MoveList(props) {
  const moves = props.history.map((step, move) => {
    let desc;
    if (!move) {
      desc = 'Game start';
    } else if (move === props.history.length - 1 && props.winner) {
      desc = 'Winner: ' + props.winner;
    } else if (move === props.stepNumber) {
      desc = <b>Move # {move} </b>;
    } else {
      desc = 'Move #' + move;
    }

    return (
      <li key={move}>
        <a href="#" onClick={() => props.onClick(move)}>{desc}</a>
      </li>
    );
  });

  return (
    <ol>{moves}</ol>
  );
}


export default MoveList;
