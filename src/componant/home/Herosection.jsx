import styled from "styled-components";

const Herosection = () => {
  return (
    <ImgContainer>
      <img
        src="https://images.pexels.com/photos/4809236/pexels-photo-4809236.jpeg"
        alt="img"
        style={{
          width: "100%",
          height: "80vh",
          marginTop: "20vh",
          backgroundRepeat: "no-repeat",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </ImgContainer>
  );
};

export default Herosection;

const ImgContainer = styled.div`
  width: 100%;
  height: 80vh;
`;
