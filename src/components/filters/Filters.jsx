import React from 'react';
import styles from './styles.module.scss';
import allProductsImage from '../../assets/allProducts.webp';
import electronicsImage from '../../assets/electronics.webp';
import fashionImage from '../../assets/fashion.webp';
import jeweleryImage from '../../assets/jewelery.webp';

export const Filters = ({ setCategory }) => {

  return (
    <div className={styles.container}>
      <div className={styles.card_top}>
        <div className={styles.item1} onClick={() => setCategory('all')}>
          <img src={allProductsImage} width="90" height="90" alt="category-all" />
          <h6>All Products</h6>
        </div>
        <div className={styles.item3} onClick={() => setCategory('fashion')}>
          <img src={fashionImage} width="90" height="90" alt="category-fashion" />
          <h6>Fashion</h6>
        </div>
        <div className={styles.item2} onClick={() => setCategory('electronics')}>
          <img src={electronicsImage} width="90" height="90" alt="category-electronics" />
          <h6>Electronics</h6>
        </div>
        
        <div className={styles.item4} onClick={() => setCategory('jewelery')}>
          <img src={jeweleryImage} width="70" height="61" className="mt-3" alt="category-jewelery" />
          <h6 className="mt-2">Jewellery</h6>
        </div>
      </div>
    </div>
  );
};
