import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import CartCountContext from "../../context/CartCountContext";
import { Product } from "../../types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { id, title, price, image } = product;
  const { cartCount, setCartCount } = useContext(CartCountContext);

  const [cartItems, setCartItems] = useState<any>([]);

  const handleAddToCart = (e: React.MouseEvent, id: number) => {
    if (id === product.id) {
      const newCartItem = [title, price, image];
      setCartItems({ ...cartItems, newCartItem });
    }
    setCartCount(cartCount + 1);
  };
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
            onClick={(e) => handleAddToCart(e, id)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
