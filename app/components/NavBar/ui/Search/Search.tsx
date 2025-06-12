"use client";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import $ from "jquery";
import './searchStyle.scss'
const Search: React.FC<{ setIsOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setIsOpen,
}) => {
  const searchResults = useRef<HTMLDivElement>(null);

  const handelSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValu = e.target.value;
    if (inputValu.length > 0) {
      searchResults.current && searchResults.current.classList.add("active");
    } else {
      searchResults.current && searchResults.current.classList.remove("active");
    }
  };

  const handelCloseMenu = () => {
    $("#branchesListDescTopView").slideUp(100);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handelCloseSearch = () => {
    $("#searchProductsComponent").fadeOut({ duration: 500 });
    $("#navBarLeftSide").animate({ left: "0" }, 700);
    $("#navBarRightSide").animate({ right: "0" }, 700);
  };

  return (
    <>
      <search
        className="search"
        id="searchProductsComponent"
        onMouseEnter={handelCloseMenu}
      >
        <div className="inputSearchContainer">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search for products..."
            onChange={handelSearchChange}
          />
          <IoMdClose className="closeSearch" onClick={handelCloseSearch} />
          <div className="searchResults" ref={searchResults}>
            {Array(10)
              .fill(null)
              .map((_, i) => {
                return (
                  <div key={i} className="item">
                    Product {i}
                  </div>
                );
              })}
          </div>
        </div>
      </search>
    </>
  );
};

export default Search;
