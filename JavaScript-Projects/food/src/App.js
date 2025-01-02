import styled from "styled-components";
import './App.css';

function App() {
  return (
    <MainCointainer>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo"></img>
        </div>
      </TopContainer>
    </MainCointainer>
  )
}

export default App;

const MainCointainer = styled.div``;
const TopContainer = styled.section``;