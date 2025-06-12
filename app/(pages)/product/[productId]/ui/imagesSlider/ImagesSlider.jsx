import { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useWindowSize } from "react-use";
import "./style.scss";

export default function ImagesSlider({ productImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [height, setHeight] = useState(null);
  const displayedImage = useRef(null);
  const { width } = useWindowSize();

  const updateHeight = () => {
    if (displayedImage.current) {
      setHeight(displayedImage.current.offsetHeight);
      
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateHeight();
      window.addEventListener("resize", updateHeight);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateHeight);
      }
    };
  }, [displayedImage.current]);

  return (
    <>
      <div className="imageSlider">
        <Swiper
          key={"imageSlider"}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          direction={width <= 769 ? "horizontal" : "vertical"}
          className="remainingImages"
          style={width <= 769 ? { height: "auto" } : { height: height }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {Array(8)
            .fill(null)
            .map((_, index) => {
              return (
                <Fragment key={index}>
                  <SwiperSlide>
                    <img
                      src={`/images/image ${index + 1}.webp`}
                      alt="product"
                    />
                  </SwiperSlide>
                </Fragment>
              );
            })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          ref={displayedImage}
          grabCursor={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="displayedImage"
          style={{ height: "100%" }}
        >
          {Array(8)
            .fill(null)
            .map((_, index) => {
              return (
                <Fragment key={index}>
                  <SwiperSlide>
                    <img
                      src={`/images/image ${index + 1}.webp`}
                      alt="product"
                    />
                  </SwiperSlide>
                </Fragment>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
