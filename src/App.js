const React = require("react");

const { Provider, Consumer } = React.createContext();

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          setSelected: selected => this.setState({ selected: selected })
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

class C1 extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <h1>
            Selected - key: {context.state.selected.index}, val:
            {context.state.selected.val}
          </h1>
        )}
      </Consumer>
    );
  }
}

class C2 extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5];
    return (
      <Consumer>
        {context => (
          <ul>
            {list.map((val, index) => (
              <button
                key={index}
                onClick={() => context.setSelected({ index, val })}
              >
                {val}
              </button>
            ))}
          </ul>
        )}
      </Consumer>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <Container>
        <C1 />
        <C2 />
      </Container>
    );
  }
}

module.exports = HelloWorld;
