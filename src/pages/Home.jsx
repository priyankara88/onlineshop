import Banner from "../componant/home/Banner";
import Category from "../componant/home/Category";
import Herosection from "../componant/home/Herosection";
import MiddleNavigation from "../componant/home/MiddleNavigation";
import Footer from "../footer/Footer";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Category />
      <Banner />
      {/* <MiddleNavigation /> */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
