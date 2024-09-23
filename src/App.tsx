import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import {LeadsPage} from "./Leads";


function App() {
  return (
    <Provider store={store}>
      <LeadsPage />
    </Provider>
  );
}

export default App;
