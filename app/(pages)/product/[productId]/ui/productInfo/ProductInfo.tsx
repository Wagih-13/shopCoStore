import "./style.scss";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
const ProductInfo = () => {
  return (
    <>
      <section className="Infomations">
        <h1 className="headeTitle">One Life Graphic T-shirt</h1>
        <div className="rating">
          <div className="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
          </div>
          <span className="persantage">4.52</span>
        </div>
        <section className="pricingDetails">
          <div className="price">
            <span className="newPrice">$12.99</span>
            <span className="oldPrice">$15.99</span>
            <span className="sale">-40%</span>
          </div>
          <div className="availability">
            <span className="availabilityText">In Stock</span>
          </div>
        </section>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          excepturi reprehenderit praesentium veniam tenetur quam pariatur quia
          et laboriosam consequatur molestias, maxime natus, nam ea aut. Aliquam
          rerum officiis dolore.
        </p>
        <section className="selectColor">
          <label className="selectColorTitle">Select Color</label>
          <div className="colors">
            <div
              className="color"
              style={{
                backgroundColor: "#4F4631",
                width: "30px",
                height: "30px",
              }}
            ></div>
            <div
              className="color active"
              style={{
                backgroundColor: "#314F4A",
                width: "30px",
                height: "30px",
              }}
            >
              <GiCheckMark />
            </div>
            <div
              className="color"
              style={{
                backgroundColor: "#31344F",
                width: "30px",
                height: "30px",
              }}
            ></div>
          </div>
        </section>
        <section className="chooseSize">
          <label className="chooseSizeTitle">Choose Size</label>
          <div className="sizes">
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
            <div className="size active">XL</div>
            <div className="size">XXL</div>
          </div>
        </section>
        <section className="addToCart">
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
          <button className="addToCartBtn">Add to Cart</button>
        </section>
      </section>
    </>
  );
};

export default ProductInfo;
