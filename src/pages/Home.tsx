import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return <Button component={Link} to="/shop">Home</Button>;
}
