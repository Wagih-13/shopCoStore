import ProductsSlider from "@/app/components/productsSlider/ProductsSlider";

const NewArrivals = async () => {
  const data = await fetch("https://fakestoreapi.com/products?limit=10", { cache: 'force-cache' });
  const products = await data.json();


  return (
    <>
      <div style={{ borderBottom: "1px solid #f0f0f0" }}>
        <ProductsSlider title="NEW ARRIVALS" data={products} />
      </div>
    </>
  );
};

export default NewArrivals;
