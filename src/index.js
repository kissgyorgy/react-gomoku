import React from 'react';
import ReactDOM from 'react-dom';
import Board, { SIZE as BOARD_SIZE } from './components/board';
import MoveList from './components/move-list';
import Status from './components/status';
import ResetButton from './components/reset-button';
import Navigation from './components/navigation';
import './style.css';


class Position {
  constructor(i) {
    this.row = Math.floor(i / BOARD_SIZE) + 1;
    this.col = (i % BOARD_SIZE) + 1;
  }

  toString() {
    return `${this.row}, ${this.col}`;
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

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
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
    this.setState({
      history: history.concat([{
        squares: squares,
        player: this.state.nextPlayer,
        position: new Position(i),
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
        return {player: squares[a], line: lines[i]};
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
    const winnerPlayer = winner ? winner.player : null;
    let winnerLine = null;
    // only show winner line when last move is selected in history
    if (winner && this.state.stepNumber === history.length - 1 ) {
      winnerLine = winner.line;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Status winner={winnerPlayer} nextPlayer={this.state.nextPlayer} />
          <Board winnerLine={winnerLine} squares={this.currentSquares()}
                 onClick={this.handleClick} />
          <ResetButton onReset={this.resetGame} />
          <Navigation stepNumber={this.state.stepNumber}
                      historyLength={history.length}
                      onClick={this.jumpTo} />
        </div>
        <div className="game-info">
          <MoveList history={this.state.history} winner={winnerPlayer}
                    onClick={this.jumpTo} stepNumber={this.state.stepNumber} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.getElementById('root') );
