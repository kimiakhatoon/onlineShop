import { useState, useCallback, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCart] = useState();
  useEffect(()=>{
    const data= localStorage.getItem('cartValue_object')
    setCart(!!JSON.parse(data) ? JSON.parse(data) : [])
  },[]);
  useEffect(()=>{
    if (cartItems !== undefined){
    localStorage.setItem('cartValue_object', JSON.stringify(cartItems))}
  },[cartItems]);
  const increase = useCallback((itemId) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        return [...prev, { id: itemId, count: 1 }];
      } else {
        return prev.map((item, index) =>
          index === itemIndex ? { ...item, count: item.count + 1 } : item
        );
      }
    });
  }, []);

  const decrease = useCallback((itemId) => {
    setCart((prev) => {
      const updatedCart = prev
        .map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
        .filter((item) => item.count > 0);
      return updatedCart;
    });
  }, []);
  return { cartItems, increase, decrease };
};
