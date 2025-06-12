"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import "./productCardStyle.scss";
import Image from "next/image";
import SkeletonLoder from "../skeleton/SkeletonLoder";
import { animate } from "framer-motion";
import { useFlagsContext } from "@/app/context/FlagsContext";
import Link from "next/link";

type ProductCardProps = {
  index: number;
  product?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ index, product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const favoriteIconRef = useRef<HTMLDivElement>(null);
  const addToCartBtnRef = useRef<HTMLButtonElement>(null);
  const isDataLoaded = true; // TODO : this line for testing only
  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  const { setDisplayCart } = useFlagsContext();
  const secondPhoto = useRef(null);

  return (
    <>
      {isDataLoaded ? (
        <>
          <Link href={"/product/123"} className="productCard">
            <div
              className="image"
              onMouseEnter={() => {
                if (window.innerWidth >= 769) {
                  animate(
                    secondPhoto.current,
                    { opacity: 1 },
                    { duration: 0.3 }
                  );
                }
              }}
              onTouchEnd={() => {
                if (window.innerWidth <= 768) {
                  animate(
                    secondPhoto.current,
                    { opacity: 0 },
                    { duration: 0.3 }
                  );
                }
              }}
              onTouchStart={() => {
                if (window.innerWidth <= 768) {
                  animate(
                    secondPhoto.current,
                    { opacity: 1 },
                    { duration: 0.3 }
                  );
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 769) {
                  animate(
                    secondPhoto.current,
                    { opacity: 0 },
                    { duration: 0.3 }
                  );
                }
              }}
            >
              <aside className="actionsBar">
                <div
                  className="favoritIcon"
                  ref={favoriteIconRef}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleToggleFavorite();
                  }}
                >
                  {isFavorite ? <IoHeart /> : <IoMdHeartEmpty />}
                </div>
              </aside>
              <div className="addToCartButton">
                <button
                  ref={addToCartBtnRef}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDisplayCart(true);
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <Image
                className="firstPhoto"
                width={295}
                height={300}
                src="/images/image 2.webp"
                alt={product.title}
              />
              <Image
                className="secondPhoto"
                ref={secondPhoto}
                width={295}
                height={300}
                src="/images/image 3.webp"
                alt={product.title}
              />
            </div>
            <div className="content">
              <h4>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
              <p>{product.description.split(" ").slice(0, 6).join(" ")}</p>
              <span className="rating">
                <FaStar />
                <FaStar />
              </span>
              <div className="price">
                <span className="afterSale">{product.price} EGP</span>
                <span className="beforSale">{product.price} EGP</span>
                <span className="salePecanteage">-20%</span>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <SkeletonLoder />
      )}
    </>
  );
};

export default ProductCard;
