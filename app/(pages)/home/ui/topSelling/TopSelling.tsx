import ProductsSlider from "@/app/components/productsSlider/ProductsSlider";

const TopSelling = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=20", {
    cache: "force-cache",
  });
  const data = await res.json();
  const products = data.slice(10, 20);

  
  return (
    <>
      <ProductsSlider title="TOP SELLING " data={products} />
    </>
  );
};

export default TopSelling;
