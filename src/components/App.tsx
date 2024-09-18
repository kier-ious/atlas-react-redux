import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";


const App: React.FC = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Board />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
