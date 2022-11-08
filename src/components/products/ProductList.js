import React from "react";
import products from "../../mock/products";
import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => {
  console.log("products", products);
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ width: "100%", height: "100%", p: "15px" }}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
