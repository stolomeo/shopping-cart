import { ShoppingCart } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartCountContext from "../../context/CartCountContext";

export default function Nav() {
  const { cartCount } = useContext(CartCountContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          component={Link}
          to="/"
          size="medium"
          edge="start"
          sx={{ flexGrow: 1 }}
        >
          <Typography component="h1" variant="h4">
            Fake Store
          </Typography>
        </IconButton>
        <IconButton component={Link} to="/checkout">
          <ShoppingCart fontSize="large" />
          <Typography
            variant="h5"
            sx={{
              display: !cartCount ? "none" : "block",
            }}
          >
            {cartCount}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
