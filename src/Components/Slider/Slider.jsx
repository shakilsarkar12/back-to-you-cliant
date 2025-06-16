import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide from "../Slide/Slide";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <motion.div
      animate={{ y: [50, 0], opacity: [0, 100] }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="-z-50">
          <Slide
            bgImage="https://i.ibb.co/TMptqqFm/freepik-the-style-is-candid-image-photography-with-natural-46895.png"
            header="Find What’s Lost, Faster!"
            desc="Report lost items and get help from our trusted community. Every item matters."
            btnName="View Lost&Found Item"
            link="/lost&found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage="https://i.ibb.co/8DfhGzYg/freepik-the-style-is-candid-image-photography-with-natural-56379.png"
            header="Your Lost Item is One Click Away"
            desc="Discover recovered items and connect with finders instantly through our secure platform."
            btnName="View Lost&Found Item"
            link="/lost&found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage="https://i.ibb.co/JFbg3B55/freepik-a-diverse-group-of-friendly-people-holding-recover-44299.png"
            header="Join Our Caring Community!"
            desc="Be a part of a community where people help each other reunite with their lost belongings. Together, we make the world a little safer and kinder."
            btnName="Join Our Community"
            link="/login"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Slider;
