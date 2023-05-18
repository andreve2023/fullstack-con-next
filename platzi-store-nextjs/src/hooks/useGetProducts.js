import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(API);
                setProducts(response.data);
            } catch (e) {
                console.error(e);
            }
        };
        getProducts();
    }, [API]);

    return products;
};

export default useGetProducts;
