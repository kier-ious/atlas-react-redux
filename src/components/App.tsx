import { Provider } from "react-redux";
import store from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Board } from "./Board";
import { List } from "./List";


const App: React.FC = () => {
  return (
    <div className="APP">
      <Provider store={store}>
      <Header />
      <Board />
        <List title="#1" />
        <List title="#2" />
      <Footer />
    </Provider>
    </div>
  );
};

export default App;
