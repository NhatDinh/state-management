import React from "react";
import { Context } from "./context";

class Component1 extends React.Component {
  render() {
    const { Provider, Consumer } = React.createContext();

    return (
      <Consumer>
        {context => <button>{context.state.something}</button>}
      </Consumer>
    );
  }
}

export default Component1;
