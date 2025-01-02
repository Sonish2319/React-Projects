import styled from "styled-components";

const Game = ({ toggle }) => {
  return (
    <Container>
      <div className="sty2">
        <img src="/images/pic.png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button1 onClick={toggle}>Play Now</Button1>
      </div>
    </Container>
  );
};

export default Game;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  gap: 50px;

  .content h1 {
    font-size: 96px;
    white-space: nowrap; // to put in same line
  }
`;

const Button1 = styled.button`
  color: white;
  font-weight: bold;
  font-size: 15px;
  min-width: 220px;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;
