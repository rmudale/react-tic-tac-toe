import React from "react";

const Square = (props) => {
  const { value, onClick, style } = props; 

  const onClickHandler = (event) => {
    onClick(event.target.value);
  }
  
  return (
    <div className="Square">
      <button value={value} onClick={onClickHandler} style={style}> {value} </button>
    </div>
  );
}

export default Square; 