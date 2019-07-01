import React from "react";

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const Context = React.createContext({
  selected: { key: "none", val: "none" },
  setSelected: () => {}
});
