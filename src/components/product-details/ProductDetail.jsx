import React from "react";
import useGetProductDetail from "../hooks/useGetProductDetail";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { product, loadings } = useGetProductDetail(product_id);
  console.log(product);
  return (
    <Grid container>
      <Grid size={{ md: 6 }}>
        <img
          src={product?.image}
          className="img-fluid w-75 h-50 object-fit-contain mt-5"
          alt="Image"
        />
      </Grid>
      <Grid size={{ md: 6 }}>
        <Box className="mt-5">
          <Typography variant="body5" style={{ color: "#85A947" }}>
            {product?.category}
          </Typography>
          <Typography className="py-3" variant="h4">
            {product?.title}
          </Typography>
          <Typography className="py-3" variant="body1">
            {product?.description}
          </Typography>
          <Typography className="py-3" variant="h4">
            Price: ${product?.price}
          </Typography>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#85A947",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
