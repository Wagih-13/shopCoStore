"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import MainBtn from "../buttons/MainBtn";
import { Virtual } from "swiper/modules";
import { motion } from "framer-motion";
import "./reviwsSlider.scss";
import "swiper/css/virtual";
import "swiper/css";
import { Fragment } from "react";
import ReviewCard from "../reviewCard/ReviewCard";

const ReviwsSlider = () => {
  const slides = Array(10)
    .fill(null)
    .map((_, index) => (
      <>
        <SwiperSlide key={index} virtualIndex={index}>
        <ReviewCard/>
        </SwiperSlide>
      </>
    ));
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <div className="reviwsSlider">
        <h2 className="sliderTitle">Reviws</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className="sliderContainer"
        >
          <Swiper
            modules={[Virtual]}
            breakpoints={breakpoints}
            virtual
            grabCursor={true}
          >
            {slides?.map((slideContent, index) => {
              return <Fragment key={index}>{slideContent}</Fragment>;
            })}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default ReviwsSlider;
