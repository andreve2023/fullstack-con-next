import React from 'react';
import FormProduct from '@components/FormProducts';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import axios from 'axios';

export default function Edit() {
    const [product, setProduct] = React.useState({});
    const router = useRouter();
    React.useEffect(() => {
        const { id } = router.query;
        if (!router.isReady) return;
        async function getProduct() {
            const res = await axios.get(endPoints.products.getProduct(id));
            setProduct(res.data);
        }
        getProduct();
    }, [router?.isReady]);
    return <FormProduct product={product} />;
}
