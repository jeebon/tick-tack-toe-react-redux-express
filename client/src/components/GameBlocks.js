import React from "react";
import GameBlock from "./GameBlock";

const GameBlocks = ({ blockItem, onClick }) => (
  <div className="blockWrapper">
    {blockItem.map((block, i) => (
      <GameBlock key={i} value={block} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default GameBlocks;