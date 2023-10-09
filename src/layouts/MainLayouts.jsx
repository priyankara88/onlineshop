import { Outlet } from "react-router-dom";
import Header from "../headers/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
