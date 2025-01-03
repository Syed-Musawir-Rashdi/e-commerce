import { Button, Card, Rating, Tooltip } from '@mui/material';
import Grid  from '@mui/material/Grid2';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const products = await axios.get("https://fakestoreapi.com/products");
        setProducts(products?.data);
      };
      getProducts();
    }, []);
  return (
    <>
                    <Grid container spacing={2}>
              {products?.map((product) => {
                return (
                  <Grid size={{ xs: 12, sm:6 , lg: 3, md:4, }}>
                    <Card className="p-3">
                      <div>
                        <div className="text-center">
                          <img
                            src={product?.image}
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "contain",
                            }}
                            alt="Image"
                          />
                        </div>
                        <span>{product?.category}</span>
                        <h5>
                          <Tooltip title={product?.title} placement="top" >
                            {product?.title?.length > 25
                              ? product?.title?.slice(0, 15) + "..."
                              : product?.title}
                          </Tooltip>
                        </h5>
                        <Rating
                          name="read-only"
                          value={product?.rating?.rate}
                          readOnly
                        />
                        <div className="d-flex justify-content-between align-items-center">
                          <span>Price: ${product?.price}</span>
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
    </>
  )
}

export default Product
