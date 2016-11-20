import React from 'react';


function MoveList(props) {
  const moves = props.history.map((step, move) => {
    let desc;
    if (!move) {
      desc = 'Game start';
    } else if (move === props.history.length - 1 && props.winner) {
      desc = 'Winner ' + props.winner + ': ' + step.position.toString();
    } else if (move === props.stepNumber) {
      desc = <b>Move {step.player}: {step.position.toString()} </b>;
    } else {
      desc = 'Move ' + step.player + ': ' + step.position.toString();
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
