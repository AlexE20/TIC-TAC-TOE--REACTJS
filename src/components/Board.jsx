import { useState, useEffect } from "react";
import Button from "./Button";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(true);

  const handleWinner = (c1, c2, c3) => {
    if (cells[c1] && cells[c1] === cells[c2] && cells[c2] === cells[c3])
      setTimeout(() => {
        alert("Game over");
        setCells(Array(9).fill(null));
      }, 200);
  };

  useEffect(() => {
    handleWinner(0, 1, 2);
    handleWinner(3, 4, 5);
    handleWinner(6, 7, 8);
    handleWinner(0, 3, 6);
    handleWinner(1, 4, 7);
    handleWinner(2, 5, 8);
    handleWinner(0, 4, 8);
    handleWinner(6, 4, 2);
  }, [cells]);

  const handleClick = (index) => {
    if (cells[index] === null) {
      const newCells = [...cells];
      newCells[index] = playerOne ? "X" : "O";
      setCells(newCells);
      setPlayerOne(!playerOne);
    }
  };

  return (
    <div id="game">
      {cells.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleClick(index)}>
          {cell}
        </div>
      ))}
      <Button setCells={setCells} setPlayerOne={setPlayerOne}></Button>
    </div>
  );
}

export default Board;
