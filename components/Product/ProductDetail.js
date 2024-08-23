import React from 'react';
import styles from './Product.module.css';
import Form from '../Form';
import Button from '../Button';

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
        <Button title={'Add to Cart'}></Button>
        <Form type="payment" />
      </div>
    </div>
  );
};

export default ProductDetail;
