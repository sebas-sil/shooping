import React from "react";
import Product from "../../Pages/Home/Products";
import CartContextManager from "./CardContextManager";
const CartContext = React.createContext<CartContextManager>({
    removeItem: (id?: String) => console.log(id),
    addItem: (product: Product) => console.log(product),
    clearCart: () => null,
    hasInTheCart: () => false,
    products: [],
  });
  
  export default CartContext;