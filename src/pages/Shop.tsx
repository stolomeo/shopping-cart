import { Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
export default function Shop() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  );
}