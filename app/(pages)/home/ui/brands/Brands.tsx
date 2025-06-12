import "./brandsStyle.scss";

const Brands = () => {
  return (
    <>
      <div className="brands">
        <div className="brandsContainer">
          {Array(9)
            .fill(null)
            .map(() => {
              return (
                <div key={Math.random()}>
                  <h2>NULL</h2>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Brands;
