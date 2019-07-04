import React from "react";
import useGlobal from "./use-global";

const Child = props => {
  const [globalState, globalActions] = useGlobal();
  return (
    <div>
      <button type="button" onClick={() => globalActions.getData()}>
        Get Cards
      </button>
      {globalState.cards.length > 0 && (
        <ul>
          {globalState.cards.map((card, index) => (
            <button
              key={index}
              onClick={() => globalActions.setSelectedCard(card.uid)}
            >
              {card.cardNumber} on {card.addedOn}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Child;
