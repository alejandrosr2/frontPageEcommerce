import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productAPI';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                    setProducts(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching products:', error);
                    setLoading(false);
                }
            };
            getProducts();
    }, []);

    return { products, loading };
};

export default useProducts;
