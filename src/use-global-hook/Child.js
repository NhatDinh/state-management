import React from "react";
import useGlobal from "./use-global";

const Child = props => {
  const [globalState, globalActions] = useGlobal();
  console.log("<Child/> log:", globalState.cards);
  return (
    <div>
      <button type="button" onClick={() => globalActions.getData()}>
        Get Cards
      </button>
      {globalState.cards.length > 0 && (
        <ul>
          {globalState.cards.map((card, index) => (
            <li key={index}>
              {card.cardNumber} on {card.addedOn}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Child;
