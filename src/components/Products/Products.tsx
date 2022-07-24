import { Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartCountContext from "../../context/CartCountContext";
import { Product } from "../../types";
import { getData } from "../../utils";
import ProductCard from "./ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState<Product[]>();
  const [cartitems, setCartitems] = useState<Product[]>();
  const { cartCount, setCartCount } = useContext(CartCountContext);

  const handleAddToCart = (id: number) => {
    setCartCount(cartCount + 1);
  };

  useEffect(() => {
    (async () => {
      setProducts(await getData(9));
    })();
  }, []);

  const productElements = !products ? (
    <h1>Loading...</h1>
  ) : (
    products.map((product) => {
      const { id } = product as Product;
      return (
        <ProductCard key={id} {...product} handleAddToCart={handleAddToCart} />
      );
    })
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container spacing={4}>
        {productElements}
      </Grid>
    </Container>
  );
}
