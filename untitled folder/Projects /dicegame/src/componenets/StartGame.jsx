import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <>
      <Container>
        <div>
          <img src="./dice1.png" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  width: 220px;
  height: 44px;
  background: black;
  border: 1px solid black transparent;
  transition: 0.4s background ease-in;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
