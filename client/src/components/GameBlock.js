import React from "react";

const GameBlock = ({ value, onClick }) => {
  const style = value ? `blockItem ${value}` : `blockItem`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default GameBlock;