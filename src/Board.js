import React from 'react';
import Square from "./Square";

const Board = (props) => {
  const { squares, onClick} = props;

  return (
    <div className="board">
    {
      squares.map((item, index) => (
      <Square key={index} value={item} onClick={() => onClick(index)} />
    ))
    }
    </div>
  );
};

export default Board; 