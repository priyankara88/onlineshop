import styled from "styled-components";

const GlobleButton = () => {
  return <MainContainer>ADD TO BAG</MainContainer>;
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

  &:hover {
    background: red;
  }
`;
