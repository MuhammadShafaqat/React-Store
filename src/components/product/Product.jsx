// components/productDetail/ProductDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();

  const handleAddToCart = () => {
    // Dispatch addToCart action with product and quantity
    dispatch(addToCart({ ...product, quantity }));
    console.log("Product added to cart:", product);
    // Reset quantity to 1 after adding to cart
    setQuantity(0);
  };

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
              <input type="text" className={styles.element} style={{ width: '7%' }} 
                value={quantity}
               onChange={(e)=> setQuantity(Number(e.target.value))}
              />
              <button type="button" className="btn btn-danger mx-3" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
            {quantity === 0 && <span style={{fontSize:'14px', color:'green'}}>Enter your desired number of items</span>}
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



// Please adjust above logics in the following codw for add to cart   The number of Items I put in the input It should add to the badge
