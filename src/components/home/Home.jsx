// components/home/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart";

export const Home = ({ category, searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data
    .filter(product => {
      if (category === 'all') {
        return true;
      } else if (category === 'fashion') {
        return product.category === "men's clothing" || product.category === "women's clothing";
      } else {
        return product.category === category;
      }
    })
    .filter(product => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
//
const handleAddToCart = (product) => {
  dispatch(addToCart({ ...product, quantity : 1 }));
  console.log(product)
};


  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {!loading && !error && filteredData.map((product, index) => (
        <div className={styles.container_wrapper} key={index}>
          <div className={styles.product_card}>
            <Link to={`/product/${product.id}`} className={styles.link}>
              <img className={styles.product_image} src={product.image} alt={product.name} />
            </Link>
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>
                <Link to={`/product/${product.id}`} className={styles.link}>{product.title}</Link>
              </h3>
              <p className={styles.product_description}>{product.description}</p>
              <span className={styles.product_price}><strong>PRICE: </strong>${product.price}</span><br />
              <button className={styles.add_to_cart}
               onClick={() => handleAddToCart(product)}
              >Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
