"use client";

import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";
import ProductsSlider from "@/app/components/productsSlider/ProductsSlider";
import Link from "next/link";

const WishList = () => {
  const [youMightAlsoLike, setYouMightAlsoLike] = useState([]);
  const getYouMightAlsoLike = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=10", {
      cache: "force-cache",
    });
    const products = await data.json();
    setYouMightAlsoLike(products);
  };

  useEffect(() => {
    getYouMightAlsoLike();
  }, []);
  return (
    <>
      <div className="wishList">
        <div className="container">
          <header className="header">
            <h1>Wishlist </h1>
          </header>
          <div className="wishListContainer">
            {Array(8)
              .fill(null)
              .map((_, index) => {
                return (
                  <>
                    <Link href={"/product/123"} className="wishItem">
                      <Image
                        src={`/images/image ${index + 1}.webp`}
                        width={150}
                        height={150}
                        alt=""
                      />
                      <div className="details">
                        <h4>
                          Lorem ipsum, dolor sit amet consectetur adipisicing.
                        </h4>
                        <p>Price: $19.99</p>
                        <button
                          className="removeBtn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            alert("remove");
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
          <ProductsSlider title="You might also like" data={youMightAlsoLike} />
        </div>
      </div>
    </>
  );
};

export default WishList;
