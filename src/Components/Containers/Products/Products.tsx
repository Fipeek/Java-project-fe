import React from "react";
import { useProduct } from "../../Hooks/useProduct";
import { Box, CircularProgress } from "@mui/material";
import SingleProduct from "../../Product/Product";
const Products: React.FC = () => {
  const { products, isLoading } = useProduct();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        products?.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })
      )}
    </Box>
  );
};

export default Products;
