"use client";

import { FaBars, FaSearch, FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { linksOfPages } from "./ui/LinksOfPages";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdCart } from "react-icons/io";
import Search from "./ui/Search/Search";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import "./navBarStyle.scss";
import {
  AllDropDownStatus,
  allLinksChildren,
  Children,
} from "@/app/types/appTypes";

const NavBar = () => {
  const [allDropDownChildern, setAllDropDownChildern] =
    useState<allLinksChildren>([]);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [spesificLinkChildern, setSpesificLinkChildern] = useState<Children>(
    []
  );
  const [allDropDownStatus, setAllDropDownStatus] = useState<AllDropDownStatus>(
    []
  );

  const handelOpenMenu = () => {
    $("#navBarMenuComponent").slideToggle();
    setTimeout(() => {
      handelInitializeDropDownStatus();
    }, 50);
  };

  const handelOpenSearch = () => {
    if (window.innerWidth <= 1024) {
      $("#navBarLeftSide").animate({ left: "-100vw" }, 500);
      $("#navBarRightSide").animate({ right: "-100vw" }, 500);
      $("#searchProductsComponent").fadeIn({ duration: 1000 });
      $("#navBarMenuComponent").slideUp();
    }
  };

  const handelMenuSlideUp = () => {
    if (window.innerWidth <= 1024) {
      $("#navBarMenuComponent").slideUp();
      $("#navBarMenuDropList").slideUp();
      setTimeout(() => {
        handelInitializeDropDownStatus();
      }, 50);
    } else {
      $("#branchesListDescTopView").slideUp(100);
    }
  };

  const handelReturnLiskStatus = (label: string) => {
    const linkStatus = allDropDownStatus.find((item) => item.label === label);
    return linkStatus?.status;
  };

  const handelChangeStatus = (label: string) => {
    if (window.innerWidth <= 1024) {
      const linkStatus = allDropDownStatus.find((item) => item.label === label);
      if (linkStatus) {
        linkStatus.status = !linkStatus.status;
        setAllDropDownStatus([...allDropDownStatus]);
      }
    } else {
      const linkChildern = allDropDownChildern.find(
        (item) => item.label === label
      );
      if (linkChildern) {
        setSpesificLinkChildern(linkChildern.children);
        setIsOpen(true);
        setTimeout(() => {
          $("#branchesListDescTopView").slideDown(100);
        }, 50);
      } else return false;
    }
  };

  const handelCloseMenu = () => {
    $("#branchesListDescTopView").slideUp(100);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handelInitializeDropDownStatus = () => {
    const dropDownHowsHavingChildren = linksOfPages.filter(
      (link) => link.children
    );
    const initializeAllDropDownStatus = dropDownHowsHavingChildren.map(
      (link) => {
        return { label: link.label, status: link.isOpen ?? false };
      }
    );
    setAllDropDownStatus(initializeAllDropDownStatus);
  };

  const handelInitializeDropDownChildern = () => {
    const dropDownHowsHavingChildren = linksOfPages.filter(
      (link) => link.children
    );
    const initializeAllDropDownChildern = dropDownHowsHavingChildren.map(
      (link) => {
        return { label: link.label, children: link.children };
      }
    );

    setAllDropDownChildern(initializeAllDropDownChildern as allLinksChildren);
  };

  useEffect(() => {
    setIsMobileView(window.innerWidth <= 1024);
    handelInitializeDropDownStatus();
    handelInitializeDropDownChildern();
    window.addEventListener("resize", () => {
      setIsMobileView(window.innerWidth <= 1024);
    });
  }, []);

  return (
    <>
      <nav className="navBar">
        <div className="container">
          <section className="leftSide" id="navBarLeftSide">
            <div className="barsBtn">
              <FaBars onClick={handelOpenMenu} />
            </div>
            <div className="logo">
              <Link href="/">
                NULL
                {/* <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={150}
                  height={25}
                /> */}
              </Link>
            </div>
          </section>
          <menu className="menu" id="navBarMenuComponent">
            <ul>
              {linksOfPages.map((page, index) => {
                return (
                  <Fragment key={index}>
                    {page.children ? (
                      <>
                        <li
                          className="dropDown"
                          onClick={() => {
                            handelChangeStatus(page.label);
                          }}
                          onMouseEnter={() => {
                            isMobileView === false &&
                              handelChangeStatus(page.label);
                          }}
                          key={index}
                        >
                          <span className="title">
                            {page.label}
                            {handelReturnLiskStatus(page.label) ? (
                              <SlArrowUp />
                            ) : (
                              <SlArrowDown />
                            )}
                          </span>
                          <AnimatePresence>
                            {handelReturnLiskStatus(page.label) &&
                              isMobileView && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                    transition: {
                                      delay: 0.3,
                                    },
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="dropList"
                                  id="navBarMenuDropList"
                                >
                                  {page.children.map((link, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ x: -100, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      exit={{ x: -100, opacity: 0 }}
                                      transition={{
                                        duration: 0.4,
                                        delay: i * 0.008,
                                      }}
                                      onClick={handelMenuSlideUp}
                                    >
                                      <Link href={link.path}>{link.label}</Link>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              )}
                          </AnimatePresence>
                        </li>
                      </>
                    ) : (
                      <li key={index} onClick={handelMenuSlideUp}>
                        <Link href={page.path}>{page.label}</Link>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </menu>
          <Search setIsOpen={setIsOpen} />
          <section className="rightSide" id="navBarRightSide">
            <FaSearch className="minSeach" onClick={handelOpenSearch} />
            <Link href={"/cart/123"}>
              <IoMdCart />
            </Link>
            <Link href={"/wishlist"}>
              <FaRegHeart />
            </Link>
            <FaRegUserCircle />
          </section>
        </div>
        <menu className="branchesList" id="branchesListDescTopView">
          <div className="container">
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      delay: 0.3,
                    },
                  }}
                  transition={{ duration: 0.2 }}
                  className="dropList"
                  id="navBarMenuDropList"
                  onMouseLeave={handelCloseMenu}
                >
                  {spesificLinkChildern.map((link, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.05,
                      }}
                      onClick={() => $("#branchesListDescTopView").slideUp(100)}
                    >
                      <Link href={link.path}>{link.label}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </menu>
      </nav>
    </>
  );
};

export default NavBar;
