import React from "react";
import { Paper, Card, Box, Typography, Button, CardMedia } from "@mui/material";
import { useGlobalContext } from "../../context";

const ProductItem = ({ product }) => {
  const globalState = useGlobalContext();
  const { addItem, cart } = globalState;
  console.log("cart", cart);
  return (
    <Paper sx={{ width: "260px", p: "15px", m: "10px" }}>
      <Card sx={{ height: "180px", bgColor: "#F9F9F9" }}>
        <CardMedia
          component="img"
          src={product.img}
          slt="car"
          sx={{ width: "100%", height: "100%" }}
        />
      </Card>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ fontSize: "15px", fontWeight: 600, color: "#151515" }}
        >
          {product.title}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: " #575757" }}>
          {product.description}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "#151515" }}>
          {product.rate}
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: 600, color: "#151515" }}
        >
          {product.price.toFixed(2)} USD
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button type="button " sx={{ bgcolor: "#6A983C", color: "white" }}>
            Buy now
          </Button>
          <Button
            type="button "
            sx={{ bgcolor: "#6A983C", color: "white" }}
            onClick={() => {
              addItem(product);
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductItem;
