import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/";
import CartCountContext from "./context/CartCountContext";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <BrowserRouter>
      <CssBaseline />
      <CartCountContext.Provider value={{ cartCount, setCartCount }}>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </CartCountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
