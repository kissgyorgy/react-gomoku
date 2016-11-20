import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Square from './components/square';
import MoveList from './components/move-list';


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  current() {
    return this.state.history[this.state.stepNumber];
  }

  handleClick(i) {
    const squares = this.current().squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
        return;
    }
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    squares[i] = this.nextPlayer();
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  calculateWinner() {
    const squares = this.current().squares;
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
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    const winner = this.calculateWinner();
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.nextPlayer();
    }

    return (
      <div className="game">
        <div className="game-board">
          <div>{status}</div>
          <Board squares={this.current().squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <MoveList history={this.state.history} onClick={(move) => this.jumpTo(move)} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.querySelector('.container') );
