"use client";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./style.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserCart = () => {
  const productName = "Product Name is one tow three";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="cartPage">
        <div className="container">
          <h1>Your cart</h1>
          <div className="cartContainer">
            <div className="cartItems">
              {Array(3)
                .fill(null)
                .map((_) => {
                  return (
                    <>
                      <div className="cartItem">
                        <div className="productDetialsSide">
                          <div className="imageBox">
                            <Image
                              src="/images/image 1.webp"
                              width={150}
                              height={150}
                              alt=""
                            />
                          </div>
                          <ul className="detials">
                            <li>
                              {isMobile ? (
                                <h2>
                                  {productName
                                    .trim()
                                    .split(/\s+/)
                                    .slice(0, 2)
                                    .join(" ") + "..."}
                                </h2>
                              ) : (
                                <h2>{productName}</h2>
                              )}
                            </li>

                            <li>
                              Color : <span> black</span>
                            </li>
                            <li>
                              Size : <span> XL</span>
                            </li>
                            <li className="price">$933</li>
                          </ul>
                        </div>
                        <div className="productActionsSide">
                          <button type="button" className="deleteButton">
                            <RiDeleteBin5Line />
                          </button>

                          <div className="editQuantity">
                            <button className="decrease">-</button>
                            <input
                              type="number"
                              value="1"
                              width={50}
                              style={{ textAlign: "center" }}
                              min="1"
                              max="10"
                              readOnly
                            />
                            <button className="increase">+</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="cartSummary">
              <h2>Order Summary</h2>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span className="price">$100</span>
                </li>
                <li>
                  <span>Discount (-20%)</span>
                  <span className="price offer">-$20</span>
                </li>
                <li>
                  <span>Delivery Fee</span>
                  <span className="price">$0.0</span>
                </li>
              </ul>
              <div className="totalPrice">
                <h3>Total :</h3>
                <span className="price">$80.0</span>
              </div>
              <div className="promocode">
                <div className="inputBox">
                  <MdOutlineLocalOffer />
                  <input type="text" placeholder="Add promo code" />
                </div>
                <button type="button" className="applyButton">
                  Apply
                </button>
              </div>

              <button type="button" className="checkoutButton">
                <span>Go to Checkout</span>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
