import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const Wrapper = styled.div``;
  return (
    <Wrapper>
      <Header />
      <MainContent />
    </Wrapper>
  );
}

export default App;
