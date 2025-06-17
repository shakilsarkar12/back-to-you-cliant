import React, { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import LatestFindLostItems from "../../Components/LatestFindLostItems/LatestFindLostItems";
import SiteStatistics from "../../Components/SiteStatistics/SiteStatistics";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Spinner from "../../Components/Spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false)
  }, 300);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)] mt-6">
      <Slider />
      <LatestFindLostItems />
      <WhyChooseUs />
      <SiteStatistics />
    </div>
  );
};

export default Home;
