import React, { useEffect } from "react";
import { getWinner } from "./Calculation";
import GameBlocks from "./GameBlocks";
import { connect } from 'react-redux';
import { getItems, addItems, updateCurrentStep } from '../actions';

const GamePage = ({ getItems, items, updateCurrentStep, addItems }) => {
  useEffect(() => (
    getItems()
  ), []);


  const winner = getWinner(items.steps);
  const xO = items.isNextX ? "X" : "O";

  const handleClick = (i) => {
    const current = items.steps[items.currentStep];
    const blockItem = [...current];
    if (winner || blockItem[i]) return;
    blockItem[i] = xO;
    addItems(blockItem);
  };

  const gotTo = (step) => {
    updateCurrentStep(step);
  };

  const initGame = (items) =>
    items.map((_step, move) => {
      const destination = move ? `Go to step: ${move}` : "Restart";
      return (
        <li key={move}>
          <button onClick={() => gotTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h3>Tick Tack Toe </h3>
      <GameBlocks blockItem={items.steps[items.currentStep]} onClick={handleClick} />
      <div className="logs">
        <div>
          <b>Logs</b>
          {initGame(items.steps)}
        </div>
        <b>{winner ? "Winner: " + winner : "Next: " + xO}</b>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItems()),
    updateCurrentStep: (id) => dispatch(updateCurrentStep(id)),
    addItems: (blockItem) => dispatch(addItems(blockItem))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);