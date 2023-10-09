import styled from "styled-components";

const Category = () => {
  return (
    <MainCOntainer>
      <CategoryDetailCntr>
        <Title>PRODUCT CATEGORY</Title>
        <CategoryWrapcntr>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
          <GridContainer>
            <GridLeftCnter>A</GridLeftCnter>
            <GridRightCnter>C</GridRightCnter>
          </GridContainer>
        </CategoryWrapcntr>
      </CategoryDetailCntr>
    </MainCOntainer>
  );
};

export default Category;

const MainCOntainer = styled.div`
  margin-top: 20vh;
  width: 100vw;
  height: auto;
  background: white;
`;

const CategoryDetailCntr = styled.div`
  margin: 0px 100px 10px 100px;
  background: E8E8E8;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 7;
  color: red;
`;

const CategoryWrapcntr = styled.div`
  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  height: auto;
  background: red;
`;

const GridContainer = styled.div`
  height: 10vh;
  display: flex;
  background: green;
  margin: 5px 5px 5px 5px;
  grid-gap: 5px;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

const GridLeftCnter = styled.div`
  width: 10vw;
  background: blue;
`;
const GridRightCnter = styled.div`
  width: 10vw;
  background: pink;
`;
