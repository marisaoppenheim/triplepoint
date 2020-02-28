import React from 'react';
import { Provider } from "react-redux";
import { combinedReducers } from "./redux/index"
import { createStore } from "redux"
import { Routers } from "./routes"


export const store = createStore(
  combinedReducers, {}
);

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ height: "100%" }}>
        <Routers />
      </div>
    </Provider>
  );
};
export default App;
