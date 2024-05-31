// components/productDetail/ProductDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  const addToCart = (product) => {
    // Implement the add to cart functionality here
    console.log("Product added to cart:", product);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className={styles.container}>
      {product ? (
        <div className={styles.detailPage}>
          <div className={styles.image}>
            <img src={product.image} width="300" height="450" alt={product.title} />
          </div>
          <div className={styles.details}>
            <strong className={styles.title}>{product.title}</strong><br />
            <div className={`${styles.price} ${styles.currency} fw-bold mt-3`}>${product.price}</div><br />
            <select id="sizeSelect" name="size" className={styles.select}>
              <option value="small">Small</option>
            </select><br />
            <div className={`${styles.buttonSection} mt-3 ${styles.text}`}>
              <input type="text" className={styles.element} style={{ width: '7%' }} />
              <button type="button" className="btn btn-danger mx-3" onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
            <div className={`${styles.description} mt-4`} style={{ width: '700px' }}>
              <label htmlFor="description" className="fw-bold">Product Details:</label><br /><br />
              {product.description}
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found!</div>
      )}
    </div>
  );
};
