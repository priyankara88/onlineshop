import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LanguageIcon from "@mui/icons-material/Language";

const Header = () => {
  return (
    <MainContainer>
      <DetailsCntr>
        <CompanyDetails>
          <Logo>
            <img
              src="https://cdn0.iconfinder.com/data/icons/brands-flat-2/224/swift-social-network-brand-logo-512.png"
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <p style={{ width: "150px", color: "white", fontSize: "35px" }}>
              Enchante
            </p>
            <p
              style={{
                width: "150px",
                color: "red",
                fontSize: "35px",
              }}
            >
              COUTURE
            </p>
          </Logo>
        </CompanyDetails>
        <Navigation>
          <Tab>Home</Tab>
          <Tab>Shop-Now</Tab>
          <Tab>Contact-Us</Tab>
        </Navigation>
        <UserDetails>
          <PermIdentityIcon sx={{ color: "red", marginLeft: 1 }} />
          <LanguageIcon sx={{ color: "red", marginLeft: 1 }} />
          <ShoppingCartIcon sx={{ color: "red", marginLeft: 1 }} />
        </UserDetails>
      </DetailsCntr>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 100;
`;

const DetailsCntr = styled.div`
  margin: 10px 100px 10px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 280px;
`;
const Logo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Navigation = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Tab = styled.div`
  width: 100px;
  height: 40px;
  background: black;
  color: white;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserDetails = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CompanyDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
