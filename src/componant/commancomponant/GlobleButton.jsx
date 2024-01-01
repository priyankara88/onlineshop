import styled from "styled-components";

const GlobleButton = () => {
  return (
    <MainContainer>
      <button>Click Me</button>
    </MainContainer>
  );
};

export default GlobleButton;

const MainContainer = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  color: #fff;
  background: #cdd404;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  z-index: 55;

  button {
    visibility: hidden;
    width: 150px;
    height: 40px;
    background: #fff;
    &:hover {
      display: flex;
      visibility: visible;
    }
  }
`;
