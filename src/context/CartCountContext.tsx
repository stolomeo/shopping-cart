import { createContext } from "react";

type CartCountType = {
  cartCount: number;
  setCartCount: (cartCount: number) => void;
};

const CartCountContext = createContext<CartCountType>({
  cartCount: 0,
  setCartCount: () => {},
});

export default CartCountContext;
