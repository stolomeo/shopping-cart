import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { getData } from "../../utils";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState<Product[]>();

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
      return <ProductCard key={id} product={product} />;
    })
  );

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {productElements}
      </Grid>
    </Container>
  );
}
