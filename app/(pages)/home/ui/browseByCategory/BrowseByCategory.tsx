import Image from "next/image";
import "./browseByCategoryStyle.scss";

const BrowseByCategory = async () => {
  const data = await fetch("https://fakestoreapi.com/products/categories", {
    cache: "force-cache",
  });
  const categories = await data.json();

  return (
    <>
      <div className="browseByCategory">
        <h2 className="mainTitel">Browse By Category</h2>
        <div className="categories">
          <div>
            <Image
              width={410}
              height={300}
              src="/images/Frame 62.webp"
              alt="category"
            />
            <h3>{categories[0]}</h3>
          </div>
          <div>
            <Image
              width={410}
              height={300}
              src="/images/Frame 61.webp"
              alt="category"
            />
            <h3>{categories[1]}</h3>
          </div>
          <div>
            <Image
              width={410}
              height={300}
              src="/images/Frame 63.webp"
              alt="category"
            />
            <h3>{categories[2]}</h3>
          </div>
          <div>
            <Image
              width={410}
              height={300}
              src="/images/Frame 64.webp"
              alt="category"
            />
            <h3>{categories[3]}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByCategory;
