import { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    const exists = cart.find((i) => i.itemname === item.itemname);

    if (exists) {

      const updated = cart.map((i) =>
        i.itemname === item.itemname
          ? { ...i, qty: i.qty + 1 }
          : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };


  const removeFromCart = (name) => {
    const updated = cart.filter((i) => i.itemname !== name);
    setCart(updated);
  };


  const updateQty = (name, type) => {
    const updated = cart.map((i) => {
      if (i.itemname === name) {
        if (type === "inc") return { ...i, qty: i.qty + 1 };
        if (type === "dec" && i.qty > 1)
          return { ...i, qty: i.qty - 1 };
      }
      return i;
    });

    setCart(updated);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCart = () => useContext(CartContext);