import React from "react";
import PrimarySearchAppBar from "../../components/Layout";
import ProductList from "../../components/products/ProductList";
const Products = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <ProductList />
    </div>
  );
};

export default Products;
