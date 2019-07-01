import React from "react";
import { Context } from "./context.js";

class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { key: "none", val: "none" }
    };
  }
  

  render() {
    const list = [1, 2, 3, 4, 5];
    const { selected } = this.state;

    return (
      <div>
        <Context.Consumer>
          {({ selected, setSelected }) => <button>{selected.val}</button>}
        </Context.Consumer>
        <h1>
          Local selected - key: {selected.key}, value: {selected.val}
        </h1>
        <ul>
          {list.map((val, index) => (
            <button key={index} onClick={() => this.setSelected(index, val)}>
              {val}
            </button>
          ))}
        </ul>
      </div>
    );
  }
}

export default Component2;
