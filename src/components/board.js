import React from 'react';
import Square from './square';


class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.nextPlayer();
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const status = 'Next player: ' + this.nextPlayer();
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
