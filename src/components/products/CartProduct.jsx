import {
  Box,
  Button,
  Card,
  Pagination,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductSkeleton from "./ProductSkeleton";
import useGetProduct from "../hooks/useGetProduct";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

function CartProduct() {
  const { products, loadings } = useGetProduct();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <Typography variant="h3" className="my-3">
        Products:
      </Typography>
      {loadings ? (
        <ProductSkeleton />
      ) : (
        <Grid container className="d-flex justify-content-center" spacing={2}>
          {products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            ?.map((item) => {
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 3, md: 4 }}>
                  <Card className="py-3 px-1">
                    <div>
                      <div className="text-center">
                        <img
                          src={item?.image}
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "contain",
                          }}
                          alt="Image"
                        />
                      </div>
                      <span>{item?.category}</span>
                      <h5>
                        <Tooltip title={item?.title} placement="top">
                          {item?.title?.length > 25
                            ? item?.title?.slice(0, 15) + "..."
                            : item?.title}
                        </Tooltip>
                      </h5>
                      <Rating
                        name="read-only"
                        value={item?.rating?.rate}
                        readOnly
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Price:${item?.price}</span>
                        <Link to={`/product-detail/${item?.id}`}>
                          <Button
                            size="small"
                            variant="contained"
                            style={{
                              backgroundColor: "#85A947",
                              color: "white",
                              border: "0px",
                            }}
                          >
                            <RemoveRedEyeIcon />
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          size="small"
                          style={{
                            backgroundColor: "#85A947",
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      )}

      <Box className="mt-4 d-flex justify-content-center">
        <Pagination
          onChange={(e, value) => {
            setCurrentPage(value);
          }}
          count={totalPages}
          shape="rounded"
        />
      </Box>
    </>
  );
}

export default CartProduct;
