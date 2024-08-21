// components/ProductDetail.js
import React from 'react';
import styles from './Product.module.css';

const ProductDetail = ({ product }) => {
  return (
    <div className={styles.productDetail}>
    <div className={styles.productDetailCol}>
        <img src={product.src} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.productDetailCol}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
