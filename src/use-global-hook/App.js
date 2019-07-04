import React from "react";

import Child from "./Child";
import useGlobal from "./use-global";

const App = () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <div>
      <Child />
    </div>
  );
};

export default App;
