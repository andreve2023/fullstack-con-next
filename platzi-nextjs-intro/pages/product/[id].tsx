import React from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import ProductSummary from "../../components/ProductSummary";

const ProductItem = () => {

    const {query: {id}} = useRouter();
    const [detailProduct, setDetailProduct] = React.useState<TProduct | null>(null)
    React.useEffect(() => {
        if (id){
            fetch(`/api/avo/${id}`)
                .then(res => res.json())
                .then((data: TProduct) => {
                    setDetailProduct(data)
                })
        }
    }, [id])

    return (
        <>
            {detailProduct === null ? null : <ProductSummary product={detailProduct} />}
        </>
    );
};

    export default ProductItem;