import PRODUCTS from "../../data/Prodocts";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="container">
      <h2 className="m-3">
        <a className="link-underline link-underline-opacity-25 " href="/">
          shop
        </a>
      </h2>
      <div className="d-flex justify-content-between flex-wrap gap-5 ">
        {PRODUCTS.map((ProductData) => (
          <Product key={ProductData.id} data={ProductData} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
