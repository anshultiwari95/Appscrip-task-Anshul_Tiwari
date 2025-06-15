import React from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.productDesc}>
          <div className={styles.productPrice}>₹{Math.floor(product.price * 80)}</div>
          <img src="wishlist-icon.svg" alt="wishlist"  className={styles.icon}/>
        </div>
        
      </div>
    </div>
  );
}
