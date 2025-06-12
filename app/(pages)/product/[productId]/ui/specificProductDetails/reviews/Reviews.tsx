import { FaAngleDown } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import "./style.scss";
import ReviewCard from "@/app/components/reviewCard/ReviewCard";
import { Fragment } from "react";
const Reviews = () => {
  return (
    <div className="reviewsSpecificProduct">
      <div className="headerBox">
        <div className="leftSide">
          <h2>
            All Reviews <span className="reviewNumber">(124)</span>
          </h2>
        </div>
        <div className="rightSide">
          <div className="filter">
            <GiSettingsKnobs />
          </div>
          <div className="latest">
            <span>Latest </span> <FaAngleDown />
          </div>
          <div className="writeReview"> Write a Review</div>
        </div>
      </div>
      <div className="contentBox">
        {(window.innerWidth >= 767 ? Array(6) : Array(3))
          .fill(null)
          .map((review) => {
            return (
              <Fragment key={Math.random()}>
                <ReviewCard />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
