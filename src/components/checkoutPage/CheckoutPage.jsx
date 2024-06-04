// src/components/CheckoutPage.js
import React from 'react';
import { FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa';
import  styles from './styles.module.scss';

const CheckoutPage = () => {
  return (
    <div className={styles.checkout_container}>
      <h2 className={styles.title}>Checkout</h2>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name on Card</label>
        <input type="text" id="name" name="name" className={styles.input}  required />

        <label htmlFor="card-number" className={styles.label}>Card Number</label>
        <input type="text" id="card-number" name="card-number" className={styles.input} required />

        <label htmlFor="expiry-date" className={styles.label}>Expiry Date</label>
        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" className={styles.input} required />

        <label htmlFor="cvv" className={styles.label}>CVV</label>
        <input type="text" id="cvv" name="cvv" className={styles.input} required />

        <div className={styles.payment_methods} >
          <div className={styles.payment_icon} ><FaCreditCard /></div>
          <div className={styles.payment_icon} ><FaPaypal /></div>
          <div className={styles.payment_icon}><FaApplePay /></div>
        </div>

        <button type="submit" className={styles.button} >Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
