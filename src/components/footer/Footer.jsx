// Footer.js
import React from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__column_title}>About Us</h4>
          <p>We are a leading e-commerce platform offering a wide range of products to our valued customers.</p>
        </div>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__column_title}>Quick Links</h4>
          <ul className={styles.footer__column_links}>
            {/* <li className={styles.footer__column_links_item}><a href="/">Shop</a></li> */}
            <li className={styles.footer__column_links_item}><a href="/">Shop</a></li>
            <li className={styles.footer__column_links_item}><a href="/">Contact Us</a></li>
            <li className={styles.footer__column_links_item}><a href="/">About Us</a></li>
            <li className={styles.footer__column_links_item}><a href="/">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__column_title}>Contact Us</h4>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 E-commerce St, Online City, Internet</p>
        </div>
        <div className={styles.footer__column}>
          <h4 className={styles.footer__column_title}>Follow Us</h4>
          <div className={styles.footer__social_icons}>
            <a className={styles.footer__social_icons_icon} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            </a>
            <a className={styles.footer__social_icons_icon} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-twitter"></i> */}
              <FaTwitter />
            </a>
            <a className={styles.footer__social_icons_icon} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-instagram"></i> */}
               <FaInstagram />
            </a>
            <a className={styles.footer__social_icons_icon} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-linkedin-in"></i> */}
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footer__text}>© {new Date().getFullYear()} Your E-commerce Store. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
