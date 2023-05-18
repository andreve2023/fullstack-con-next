import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);
    console.log(product);
    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductItem}>
            <img src={product?.images[0]} alt={product.title} width={300} height={300} />
            <div className={styles['product-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <Image src={addToCartImage} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
