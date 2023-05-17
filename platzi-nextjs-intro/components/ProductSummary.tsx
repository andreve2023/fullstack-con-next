import React from 'react';
type ProductSummaryProps ={
    product: TProduct
}
const ProductSummary = ({product}: ProductSummaryProps) => {
    console.log(product)
    return (
        <div>
            <h1>{product.data.name}</h1>
        </div>
    );
};

export default ProductSummary;