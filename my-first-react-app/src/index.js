import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function calculateWinner(squares) {
  let line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4 ,8],
    [2, 4 ,6]
  ];
  
  let isOver = false;
  line.forEach(element => {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      isOver = true;
    }
  });

  return isOver;
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let isNext = this.state.isNext;
    squares[i] = isNext ? "X" : "O";
    this.setState({
      squares: squares,
      isNext: !isNext
    });
    if (calculateWinner(squares)) {
      alert("Winner");
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const title = "Next player: X";

    return (
      <div>
        <div className="title">{title}</div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Game extends React.Component {
  render() {
    return <Board />;
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
