"use client";

import { FC, useState } from "react";
import "./style.scss";
import Reviews from "./reviews/Reviews";
import Details from "./details/Details";
import Faqs from "./faqs/Faqs";
import { motion } from "framer-motion";

type SpecificProductDetailsType = {
  productId: string;
};
const SpecificProductDetails: FC<SpecificProductDetailsType> = ({
  productId,
}) => {
  const [isReviewActive, setIsReviewActive] = useState(true);
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const [isFaqsActive, setIsFaqsActive] = useState(false);

  const handelClick = (event: React.MouseEvent<HTMLElement>) => {
    const itemName = (event.target as HTMLLIElement).dataset.name;
    switch (itemName) {
      case "Details":
        setIsReviewActive(false);
        setIsDetailsActive(true);
        setIsFaqsActive(false);

        break;
      case "Reviews":
        setIsReviewActive(true);
        setIsDetailsActive(false);
        setIsFaqsActive(false);

        break;
      case "FAQs":
        setIsReviewActive(false);
        setIsDetailsActive(false);
        setIsFaqsActive(true);

        break;
      default:
        break;
    }
    (event.target as HTMLLIElement).classList.add("active");
    document.querySelectorAll(".tabLink").forEach((li) => {
      event.target !== li && li.classList.remove("active");
    });
  };

  return (
    <>
      <div className="specificProductData">
        <div className="container">
          <ul className="tabLinkContainer">
            <li
              className="tabLink "
              onClick={(e) => handelClick(e)}
              data-name={"Details"}
            >
              Product Details
            </li>
            <li
              className="tabLink active"
              onClick={(e) => handelClick(e)}
              data-name={"Reviews"}
            >
              Rating & Reviews
            </li>
            <li
              className="tabLink "
              onClick={(e) => handelClick(e)}
              data-name={"FAQs"}
            >
              FAQs
            </li>
          </ul>

          <div className="tabsContainer">
            {isReviewActive && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Reviews />
              </motion.div>
            )}
            {isDetailsActive && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Details />
              </motion.div>
            )}
            {isFaqsActive && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Faqs />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificProductDetails;
