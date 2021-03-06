import React, { Component } from "react";
import Row from "./row";

class Scrabble extends Component {
  state = {
    board: [
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "c",
        "a",
        "r",
        "t",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "r",
        "-",
        "a",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "o",
        "-",
        "r",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "r",
        "-",
        "e",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "e",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "s",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ]
    ]
  };

  render() {
    const { board } = this.state;
    return (
      <div className="board">
        {board.map((row, index) => {
          return <Row rowContent={row} key={index} />;
        })}
      </div>
    );
  }
}
export default Scrabble;
