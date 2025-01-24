import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetProduct = () => {
    const [products, setProducts] = useState([]);
    const [loadings, setLoadings] = useState(true);
    

    useEffect(() => {
      const getProducts = async () => {
        const products = await axios.get("https://fakestoreapi.com/products");
        setProducts(products?.data);
        
        setLoadings(false);
      };
      getProducts();
    }, []);
    
    return{products,loadings};
}

export default useGetProduct
