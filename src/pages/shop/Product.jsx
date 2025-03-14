import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, ProductName, ProductImage, Price } = props.data;
  const { cartItems, increase, decrease } = useContext(ShopContext);
  const isInCart = cartItems?.some((item) => id === item.id);
  return (
    <div className="border m-1">
      <img src={ProductImage} className=" w-90 m-1 p-1" alt={ProductName} />
      <h5> {ProductName}</h5>
      <p className="m-1 "> price: {Price} $</p>
      <button
        className="btn btn-info btn-sm m-1 p-2 bg-primary text-white"
        onClick={() => increase(id)}
      >
        +
      </button>
      <span className="mx-1">
        {cartItems?.find((row) => row.id === id)?.count}
      </span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm m-1 p-2 bg-primary text-white"
          onClick={() => decrease(id)}>
          -
        </button>
      )}
    </div>
  );
};
export default Product;
