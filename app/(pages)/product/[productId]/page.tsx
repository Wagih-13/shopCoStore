"use client";

import { useParams } from "next/navigation";
import ImagesSlider from "./ui/imagesSlider/ImagesSlider";
import ProductInfo from "./ui/productInfo/ProductInfo";
import "./style.scss";
import SpecificProductDetails from "./ui/specificProductDetails/SpecificProductDetails";
import ProductsSlider from "@/app/components/productsSlider/ProductsSlider";
import { useEffect, useState } from "react";

const page = () => {
  const { productId } = useParams();
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
      <main className="productDetails">
        <div className="container">
          <section className="productMainDetails">
            <section className="productImages">
              <ImagesSlider productImages={null} />
            </section>
            <section className="productInfo">
              <ProductInfo />
            </section>
          </section>
        </div>
        <SpecificProductDetails productId={String(productId)} />
        <div className="container">
          <ProductsSlider title="You might also like" data={youMightAlsoLike} />
        </div>
      </main>
    </>
  );
};

export default page;
