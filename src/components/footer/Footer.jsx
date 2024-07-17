import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p className={styles.footer__text}>© {new Date().getFullYear()} Your E-commerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
