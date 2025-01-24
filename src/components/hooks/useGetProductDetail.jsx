import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetProductDetail = (product_id) => {  
    const [product, setProduct] = useState({});
    const [loadings, setLoadings] = useState(true);
    

    useEffect(() => {
      const getProducts = async () => {
        const product = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
        setProduct(product?.data);
        
        setLoadings(false);
      };
      getProducts();
    }, []);
    
    return{product,loadings};
}

export default useGetProductDetail
