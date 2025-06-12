"use client";

import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import MainBtn from "../buttons/MainBtn";
import { motion } from "framer-motion";
import "./productsSliderStyle.scss";
import "swiper/css/virtual";
import "swiper/css";

type ProductsSliderProps = {
  data?: string[];
  title: string;
};

const ProductsSlider: React.FC<ProductsSliderProps> = ({ title, data }) => {
  const slides = data?.map((product, index) => (
    <>
      <ProductCard index={index} product={product} />
    </>
  ));
  const breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <div className="cardsSlider">
        <h2 className="sliderTitle">{title}</h2>
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
            {slides?.map((slideContent, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div>{slideContent}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <MainBtn
          content="View All "
          background="white"
          border="1px solid #f0f0f0"
          fontSize="$xlFont"
          color="black"
        />
      </div>
    </>
  );
};

export default ProductsSlider;
