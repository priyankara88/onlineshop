import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import ShopNow from "../pages/ShopNow";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayouts}>
            <Route index Component={Home} />
            <Route path="Shop-Now" Component={ShopNow} />
            <Route path="Contact-Us" Component={ContactUs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
