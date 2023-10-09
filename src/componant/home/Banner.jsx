import styled from "styled-components";
import { thousandSeparate } from "../../libs/ThousandSeparete";

const CommaSeparate = () => {
  thousandSeparate(10000.0);
};

const Banner = () => {
  return (
    <MainContainer>
      <BannerContainer>
        <BannerDetails>
          <GridDetails>a</GridDetails>
          <GridDetails>
            <GridMainSlogun>
              <p>EMPOWERING WOMEN ACROSS WORLD THROUGH EDUCATION</p>
              <p>priyankara senarathne Foundation</p>
              <GridMainSlogunButton onClick={CommaSeparate}>
                Read More
              </GridMainSlogunButton>
            </GridMainSlogun>
          </GridDetails>
          <GridDetails>c</GridDetails>
        </BannerDetails>
      </BannerContainer>
    </MainContainer>
  );
};

export default Banner;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100vw;
  height: 250px;
  background: #e8e8e8;
`;

const BannerContainer = styled.div`
  margin: 0px 100px 0px 100px;
  width: 87vw;
  height: 220px;
  background: #050505;
  color: white;
`;

const BannerDetails = styled.div`
  display: grid;
  grid-template-columns: 25vw 37vw 25vw;
  grid-template-rows: 1;
  height: 220px;
`;

const GridDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridMainSlogun = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GridMainSlogunButton = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  color: white;
  background: #147eca;
  text-align: center;
`;
