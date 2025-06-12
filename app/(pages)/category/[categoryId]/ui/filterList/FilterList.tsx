"use client";

import MainBtn from "@/app/components/buttons/MainBtn";
import PriceRange from "@/app/components/priceRange/PriceRange";
import React, { useEffect, useRef, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./style.scss";
import { motion } from "framer-motion";
import { useFlagsContext } from "@/app/context/FlagsContext";

const FilterList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { setDisplayFilter, displayFilter } = useFlagsContext();
  const handlePriceRangeChange = (range: [number, number]) => {
    console.log("Selected Range:", range);
  };
  const filterListRef = useRef(null);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ y: 1000, opacity: 0 }}
        ref={filterListRef}
        className="fillterSide"
      >
        <header>
          <h2>Filter</h2>
          {isMobile ? (
            displayFilter && (
              <span onClick={() => setDisplayFilter(false)}>
                <IoMdClose />
              </span>
            )
          ) : (
            <GiSettingsKnobs />
          )}
        </header>
        <section className="list">
          <ul>
            <li>
              <span>Shirt</span> <MdOutlineKeyboardArrowRight />
            </li>
            <li>
              <span>T-Shirt</span>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li>
              <span>Pants</span> <MdOutlineKeyboardArrowRight />
            </li>
            <li>
              <span>Jackets</span> <MdOutlineKeyboardArrowRight />
            </li>
            <li>
              <span>Accessories </span>
              <MdOutlineKeyboardArrowRight />
            </li>
          </ul>
        </section>
        <section className="price">
          <div className="headOfSection">
            <h2>Price</h2>
            <IoIosArrowDown />
          </div>
          <PriceRange
            min={50}
            max={200}
            step={10}
            onRangeChange={handlePriceRangeChange}
          />
        </section>
        <section className="colors">
          <div className="headOfSection">
            <h2>Colors</h2>
            <IoIosArrowDown />
          </div>
          <ul>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </section>
        <section className="sizes">
          <div className="headOfSection">
            <h2>Sizes</h2>
            <IoIosArrowDown />
          </div>
          <ul>
            <li>
              <span>S</span>
            </li>
            <li>
              <span>M</span>
            </li>
            <li>
              <span>L</span>
            </li>
            <li>
              <span>XL</span>
            </li>
            <li>
              <span>XXL</span>
            </li>
            <li>
              <span className="active">XXL</span>
            </li>
            <li>
              <span>XXXL</span>
            </li>
          </ul>
        </section>
        <section className="applyBtn">
          <MainBtn
            content="Apply Filter"
            fontSize="20px"
            color="white"
            background="black"
            border="none"
          />
        </section>
      </motion.div>
    </>
  );
};

export default FilterList;
