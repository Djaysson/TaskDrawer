import { Board } from "./components/Board/index";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
