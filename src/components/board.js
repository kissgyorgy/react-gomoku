import React from 'react';
import Square from './square';


class Board extends React.Component {
  renderSquare(i) {
    let isWinner = null;
    if ( this.props.winnerLine ) {
      isWinner = this.props.winnerLine.indexOf(i) !== -1;
    }
    return <Square isWinner={isWinner} key={i} value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i)} />;
  }

  render() {
    var rows = [];
    let squares = [];
    for (var r = 0; r < 3; r++) {
      for (var i = r * 3; i < r*3 + 3; i++) {
        squares.push(this.renderSquare(i));
      }
      rows.push(<div key={r} className="board-row">{squares}</div>);
      squares = [];
    }

    return <div>{rows}</div>;
  }
}

export default Board;
