import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

export const Home = ({ category, searchTerm }) => {
  const [data, setData] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

 const filteredData = data.filter(product =>{
  if (category === 'all') {
    return true
  }else if(category === 'fashion'){
    return product.category === "men's clothing" || product.category === "women's clothing"
  }else{
    return product.category === category
  }
 }).filter(product =>{
  return product.title.toLowerCase().includes(searchTerm.toLowerCase());
 })
  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {!loading &&
        !error &&
        filteredData.map((product, index) => (
          <div className={styles.container_wrapper} key={index}>
            <div className={styles.product_card}>
              <img className={styles.product_image} src={product.image} alt={product.name} />
              <div className={styles.product_info}>
                <h3 className={styles.product_name}>{product.title}</h3>
                <p className={styles.product_description}>{product.description}</p>
                <span className={styles.product_price}><strong>PRICE:</strong> {product.price}</span><br />
                <button className={styles.add_to_cart}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
