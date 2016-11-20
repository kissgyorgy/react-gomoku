import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Square from './components/square';
import MoveList from './components/move-list';
import Status from './components/status';
import ResetButton from './components/reset-button';


class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }
}


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      nextPlayer: 'X',
      stepNumber: 0,
    };
  }

  currentSquares() {
    return this.state.history[this.state.stepNumber].squares;
  }

  handleClick(i) {
    const squares = this.currentSquares().slice();
    if (this.calculateWinner(squares) || squares[i]) {
        return;
    }
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    squares[i] = this.state.nextPlayer;
    const row = Math.floor(i / 3) + 1;
    const column = (i % 3) + 1;
    this.setState({
      history: history.concat([{
        squares: squares,
        player: this.state.nextPlayer,
        position: new Position(row, column),
      }]),
      nextPlayer: (this.state.nextPlayer === 'X') ? 'O' : 'X',
      stepNumber: history.length,
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPlayer: (step % 2) ? 'O' : 'X',
    });
  }

  resetGame() {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      nextPlayer: 'X',
      stepNumber: 0,
    });
  }

  render() {
    const history = this.state.history;
    const lastSquares = history[history.length - 1].squares;
    const winner = this.calculateWinner(lastSquares);
    return (
      <div className="game">
        <div className="game-board">
          <Status winner={winner} nextPlayer={this.state.nextPlayer} />
          <Board squares={this.currentSquares()} onClick={(i) => this.handleClick(i)} />
          <ResetButton onReset={() => this.resetGame()} />
        </div>
        <div className="game-info">
          <MoveList history={this.state.history}
                    winner={winner}
                    onClick={(move) => this.jumpTo(move)}
                    stepNumber={this.state.stepNumber} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.querySelector('.container') );
