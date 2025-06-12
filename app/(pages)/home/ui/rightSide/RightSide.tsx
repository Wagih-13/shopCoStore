import Image from "next/image";
import './rightSideStyle.scss'
const RightSide = () => {
  
  return (
    <>
      <div className="rightSideSec">
        <div className="vectors">
          <Image
            src="/images/Vector.webp"
            width={80}
            height={80}
            alt="vector"
            className="one"
          />
          <Image
            src="/images/Vector.webp"
            width={60}
            height={60}
            alt="vector"
            className="two"
          />
        </div>
        <Image
          src="/images/landingImg.webp"
          alt="Landing"
          width={400}
          height={500}
          quality={100}
        />
      </div>
    </>
  );
};

export default RightSide;
