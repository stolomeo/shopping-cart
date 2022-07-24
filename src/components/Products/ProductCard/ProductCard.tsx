import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductCardProps } from "../../../types";

export default function ProductCard({
  id,
  title,
  price,
  image,
  handleAddToCart,
}: ProductCardProps) {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          height: 450,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          height={250}
          sx={{ objectFit: "contain", p: 4 }}
          alt="product"
        />
        <CardContent sx={{ height: 130 }}>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions sx={{ px: 2 }}>
          <Button
            id={id.toString()}
            fullWidth={true}
            variant="contained"
            color="primary"
            onClick={() => handleAddToCart(id)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
