import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";


const App: React.FC = () => {
  return (
    <div className="app">
        <Header />
        <Board />
        <Footer />
    </div>
  );
};

export default App;
