import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { title, price, description, category, image, rating } = product;

  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia component="img" image={image} alt="product" />
        <CardContent>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            {price}
          </Typography>
        </CardContent>
        <CardActions sx={{ px: 2 }}>
          <Button fullWidth={true} variant="contained" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
