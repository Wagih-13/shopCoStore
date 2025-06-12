"use client";

import MainBtn from "@/app/components/buttons/MainBtn";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./leftSideStyle.scss";

const LeftSide = () => {
  const titleText = "FIND CLOTHES THAT MATCHES YOUR STYLE";

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const mainTitleVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { staggerChildren: 0.05 },
    },
  };

  const RenderTitleCharacters = () => {
    return titleText.split("").map((char, index) => (
      <motion.span variants={variants} key={index}>
        {char}
      </motion.span>
    ));
  };

  const statisticsData = [
    { value: 200, label: "International Brands" },
    { value: 2000, label: "High-Quality Products" },
    { value: 3000, label: "Happy Customers" },
  ];

  const RenderStatistics = () => {
    return statisticsData.map(({ value, label }, index) => (
      <div className="item" key={index}>
        <span className="value">
          <CountUp start={0} end={value} duration={3} delay={0} />+
        </span>
        <span className="key">{label}</span>
      </div>
    ));
  };

  return (
    <div className="leftSideSec">
      <motion.h1
        variants={mainTitleVariants}
        initial="hidden"
        animate="visible"
        className="mainTitle"
      >
        <RenderTitleCharacters />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0, type: "spring" }}
      >
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </motion.p>
      <MainBtn
        content="Shop Now"
        fontSize="30px"
        color="white"
        background="black"
        border="none"
      />
      <div className="statistics">
        <RenderStatistics />
      </div>
    </div>
  );
};

export default LeftSide;
