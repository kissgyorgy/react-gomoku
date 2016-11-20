import React from 'react';


function MoveList(props) {
  const moves = props.history.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start';
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
