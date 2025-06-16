import React from "react";
import Slider from "../../Components/Slider/Slider";
import LatestFindLostItems from "../../Components/LatestFindLostItems/LatestFindLostItems";
import SiteStatistics from "../../Components/SiteStatistics/SiteStatistics";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)] mt-6">
      <Slider />
      <LatestFindLostItems />
      <SiteStatistics />
    </div>
  );
};

export default Home;
