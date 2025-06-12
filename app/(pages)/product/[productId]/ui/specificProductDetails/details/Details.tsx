import "./style.scss";

const Details = () => {
  return (
    <div className="productDetailsSec">
      <table className="productDetailsTable">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material</td>
            <td>100% Cotton</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>Graphic T-shirt</td>
          </tr>
          <tr>
            <td>Fit</td>
            <td>Regular Fit</td>
          </tr>
          <tr>
            <td>Care Instructions</td>
            <td>Machine wash cold, tumble dry low</td>
          </tr>
          <tr>
            <td>Country of Origin</td>
            <td>Made in USA</td>
          </tr>
          <tr>
            <td>SKU</td>
            <td>OLG-TS-001</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
