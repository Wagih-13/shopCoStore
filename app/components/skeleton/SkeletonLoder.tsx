import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import "./skeletonStyle.scss";

const SkeletonLoder = () => {
  return (
    <>
      <div className="skeletonCard">
        <Skeleton className="skeletonImage" />
        <Skeleton width={"80%"} />
        <Skeleton width={"70%"} />
        <Skeleton />
        <Skeleton width={"60%"} />
      </div>
    </>
  );
};

export default SkeletonLoder;
