"use client";

import "./style.scss";
import { useFlagsContext } from "@/app/context/FlagsContext";
import FilterList from "./ui/filterList/FilterList";
import ItemsList from "./ui/itemsList/ItemsList";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Category = () => {
  const { displayFilter} = useFlagsContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <AnimatePresence>
        <div className="categoryPage">
          <div className="container">
            {isMobile ? displayFilter && <FilterList /> : <FilterList />}
            <ItemsList />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Category;
