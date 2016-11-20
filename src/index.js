import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Square from './components/square';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.querySelector('.container') );
