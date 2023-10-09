import { useState } from "react";
import styled from "styled-components";
import GlobleButton from "../commancomponant/GlobleButton";

const catList = ["New-Arrivals", "Dresses", "Tops", "Pants", "Linen"];

const MiddleNavigation = () => {
  const [tabChange, setTabChange] = useState(0);

  const HendleOnclick = (e) => {
    setTabChange(e.target.id);
  };

  return (
    <MainContainer>
      {catList.map((ele, index) => {
        return (
          <>
            <NavigationTab key={index} id={index} onClick={HendleOnclick}>
              {ele}
            </NavigationTab>
          </>
        );
      })}

      <ItemContainer>
        <CardData>
          <ImgContainer>
            <GlobleButton />
          </ImgContainer>
          <PriceContainer>
            <p>SCY2.0 Flared Legging - Pink</p>
            <p>LKR 5500.00</p>
          </PriceContainer>
        </CardData>
        <CardData>
          <ImgContainer>ddd</ImgContainer>
          <PriceContainer>
            <p>SCY2.0 Flared Legging - Pink</p>
            <p>LKR 5500.00</p>
          </PriceContainer>
        </CardData>
        <CardData>
          <ImgContainer>ddd</ImgContainer>
          <PriceContainer>
            <p>SCY2.0 Flared Legging - Pink</p>
            <p>LKR 5500.00</p>
          </PriceContainer>
        </CardData>
        <CardData>
          <ImgContainer>ddd</ImgContainer>
          <PriceContainer>
            <p>SCY2.0 Flared Legging - Pink</p>
            <p>LKR 5500.00</p>
          </PriceContainer>
        </CardData>
      </ItemContainer>
    </MainContainer>
  );
};

export default MiddleNavigation;

const MainContainer = styled.div`
  margin: 20px 100px 10px 100px;
  background: #858a85;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavigationTab = styled.div`
  margin: 2px 2px 2px 2px;
  border-radius: 7px;
  width: 15vw;
  height: 4vh;
  flex: 1;
  background: blue;
  text-align: center;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  min-width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-template-rows: auto;
  text-align: center;
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 300px;
  height: 450px;
  background: pink;
`;

const ImgContainer = styled.div`
  display: flex;
  background: green;
  height: 375px;
  align-items: center;
  justify-content: center;
`;

const PriceContainer = styled.div`
  background: yellow;
  height: 75px;
`;
