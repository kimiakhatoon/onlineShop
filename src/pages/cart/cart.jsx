import { useContext } from "react";
import PRODUCTS from "../../data/Prodocts";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className='container'> 
      <h1>your cart items</h1>
      <div className="d-flex justify-content-start flex-wrap gap-2">
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0)) {
            return <Product key={p.id} data={p} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
