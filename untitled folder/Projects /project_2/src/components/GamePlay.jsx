import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
