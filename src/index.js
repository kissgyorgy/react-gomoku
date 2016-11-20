import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Square from './components/square';


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.nextPlayer();
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner() {
    const squares = this.state.squares;
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
          <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game />, document.querySelector('.container') );
