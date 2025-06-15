"use client";
import React, { useState, useEffect } from 'react';
import styles from './MainSection.module.css';

import ProductCard from '../ProductCard/ProductCard'; 
import FilterSidebar from '../SideBar/FilterSidebar';


export default function MainSection() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [products, setProducts] = useState([]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <main>
      <section className={styles.headingSection}>
  <h2 className={styles.headingSection__title}>DISCOVER OUR PRODUCTS</h2>
  <span className={styles.headingSection__description}>
    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/> scelerisque. 
    Dolor integer scelerisque nibh amet mi ut elementum dolor.
  </span>
</section>

<section className={styles.mainSection}>
  <div className={styles.toolbar}>
    <div className={styles.filter}>
      <span className={styles.toolbar__itemCount}>{products.length} ITEMS</span>
      <button className={styles.toolbar__filterToggle} onClick={toggleSidebar}>  
    
      {showSidebar ? (
      <>
        <img src="hidefilter-icon.svg"  alt="hide" className={styles.icon} />
        HIDE FILTER
      </>
    ) : (
      <>
        <img src="showfilter-icon.svg"  alt="show" className={styles.icon} />
        SHOW FILTER
      </>
    )}
    </button>
    </div>

    <select className={styles.toolbar__sortDropdown}>
      <option value="recommended">RECOMMENDED</option>
      <option value="new">NEWEST FIRST</option>
      <option value="popular">POPULAR</option>
      <option value="high">PRICE: HIGH TO LOW</option>
      <option value="low">PRICE: LOW TO HIGH</option>
    </select>
  </div>

  <div className={styles.contentArea}>
  
  {showSidebar && (
    <aside className={styles.sidebar}>
      <FilterSidebar />
    </aside>
  )}

  
  <div className={styles.gridWrapper}>
    <div
      className={`${styles.productGrid} ${
        showSidebar ? styles.withFilter : styles.fullWidth
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>
</section>
    </main>
  );
}
