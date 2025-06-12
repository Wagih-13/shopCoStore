import "./footerStyle.scss";
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="subscribeBox">
            <span className="subscribeBoxText">
              Subscribe to Our Newsletter
            </span>
            <form>
              <div className="inputBox">
                <BsEnvelope />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footerLinks">
            <div className="logoSide">
              <Image width={150} height={25} src="/images/logo.webp" alt="" />
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="socialLinks">
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
                <a href="/">
                  <FaGithub />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <ul>
              <li className="titleHead">Company</li>
              <li>About</li>
              <li>featuers</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
            <ul>
              <li className="titleHead">Help</li>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Tearms & Condtions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li className="titleHead">FAQ</li>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
            <ul>
              <li className="titleHead">Resources</li>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How To - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
          <div className="copyRights">
            <div>Shop.co © 2000-2023, All Rights Reserved</div>
            <div className="paymentsMethods">
              <Image
                src="/images/method-1.png"
                width={40}
                height={25}
                alt="payMethod"
              />
              <Image
                src="/images/method-2.png"
                width={40}
                height={25}
                alt="payMethod"
              />
              <Image
                src="/images/method-3.png"
                width={40}
                height={25}
                alt="payMethod"
              />
              <Image
                src="/images/method-4.png"
                width={40}
                height={25}
                alt="payMethod"
              />
              <Image
                src="/images/method-5.png"
                width={40}
                height={25}
                alt="payMethod"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
