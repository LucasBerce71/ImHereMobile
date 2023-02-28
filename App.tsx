import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Home />
    </Fragment>
  );
};

export default App;