"use client";
import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "@/app/components/productCard/ProductCard";
import Pagination from "@/app/components/pagination/Pagination";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GiSettingsKnobs } from "react-icons/gi";
import { useFlagsContext } from "@/app/context/FlagsContext";
const ItemsList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { setDisplayFilter } = useFlagsContext();
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=10", {
      cache: "force-cache",
    });
    const products = await data.json();
    setData(products);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="itemsSide">
        <header className="sortByList">
          <h2>Casual</h2>

          <span>
            Sort by: Most Popular <IoIosArrowDown />
          </span>
          {isMobile && (
            <span onClick={() => setDisplayFilter(true)}>
              <GiSettingsKnobs />
            </span>
          )}
        </header>
        <main className="itemsContainer">
          {data?.map((product, index) => {
            return <ProductCard index={index} product={product} />;
          })}
        </main>
        <Pagination totalPages={10} />
      </div>
    </>
  );
};

export default ItemsList;
