import LeftSide from "./ui/leftSide/LeftSide";
import Brands from "./ui/brands/Brands";
import RightSide from "./ui/rightSide/RightSide";
import NewArrivals from "./ui/newArrivals/NewArrivals";
import TopSelling from "./ui/topSelling/TopSelling";
import "./style.scss";
import BrowseByCategory from "./ui/browseByCategory/BrowseByCategory";
import ReviwsSlider from "@/app/components/reviwsSlider/ReviwsSlider";
import VideoSection from "./ui/videoSection/VideoSection";

const HomePage = () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <>
      <div className="landingSection">
        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
        <Brands />
      </div>
      <div className="productDisplaySection">
        <div className="container">
          <NewArrivals />
        </div>
      </div>
      <VideoSection />
      <div className="productDisplaySection">
        <div className="container">
          <TopSelling />
        </div>
      </div>
      <BrowseByCategory />
      <ReviwsSlider />
    </>
  );
};

export default HomePage;
