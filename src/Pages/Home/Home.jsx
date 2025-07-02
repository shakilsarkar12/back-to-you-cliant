import React, { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import LatestFindLostItems from "../../Components/LatestFindLostItems/LatestFindLostItems";
import SiteStatistics from "../../Components/SiteStatistics/SiteStatistics";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Spinner from "../../Components/Spinner/Spinner";
import SafetyTips from "../../Components/SafetyTips/SafetyTips";
import { motion } from "framer-motion";
import { Link } from "react-router";
import CTASection from "../../Components/CTASection/CTASection";
import UserReviews from "../../Components/UserReviews/UserReviews";
import TopCategories from "../../Components/TopCategories/TopCategories";
import SuccessStories from "../../Components/SuccessStories/SuccessStories";
import FAQSection from "../../Components/FAQSection/FAQSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 300);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)] mt-6">
      <Slider />
      <LatestFindLostItems />
      <WhyChooseUs />
      <SuccessStories />
      <TopCategories />
      <UserReviews />
      <SafetyTips />
      <SiteStatistics />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
