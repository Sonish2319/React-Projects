import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <Container>
      <div className="sty">
        {arrNumber.map((value, i) => (
          <Box
            isselected={value === selectedNumber} // === gives true or false
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="para">
        <p>Select Number</p>
      </div>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display:flex;
  align-items:end;
  flex-direction:column;
  .sty {
    display: flex;
    gap: 24px;
  }
  .para p {
    font-size:25px;
    font-weight:bolder;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 30px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
