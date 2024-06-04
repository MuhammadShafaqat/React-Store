import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

const CartItems = ({  grandTotal, removeItem, emptyCart }) => {

  const [products, setProduts] = useState([]);

  const generateRandomData = () => {
    const newData = [];
    for (let i = 0; i < 10; i++) { // Adjust loop count for desired number of items
      newData.push({
        index: i + 1, // Key for rendering (consider using item.id if available)
        title: `Product ${i + 1}`,
        image: `https://picsum.photos/id/${i + 100}/120/120`, // Random image placeholder
        description: `This is a description for product ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, // Sample description
        price: Math.floor(Math.random() * 100) + 1, // Random price between $1 and $100
        quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
        total: (Math.floor(Math.random() * 100) + 1) * (Math.floor(Math.random() * 10) + 1), // Random total based on price and quantity
      });
    }
    setProduts(newData);
  };

  // Generate data on component mount (optional)
  useEffect(() => {
    generateRandomData();
  }, []);

  
  return (
    <div>
      {products.length !== 0 ? (
        <div className="container">
          <div className="card_table">
            <div className="cart-product">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img style={{ width: '120px' }} src={item.image} alt="" /></td>
                      <td style={{ width: '25%' }}>{item.description}</td>
                      <td style={{ width: '12%' }}>{item.price}</td>
                      <td style={{ width: '12%' }}>{item.quantity}</td>
                      <td style={{ width: '12%' }}>{item.total}</td>
                      <td>
                        <button onClick={() => removeItem(item)} className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="4"></td>
                    <td><button onClick={emptyCart} className="btn btn-danger">Empty Cart</button></td>
                    <td><Link to="/home" className="btn btn-primary">Shop More</Link></td>
                    <td><button className="btn btn-success">Checkout</button></td>
                    <td><strong>Grand Total : ${grandTotal}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card">
            <h5 className="card-title">My Cart</h5>
          </div>
          <div className="center">
            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
            <h4>Your cart is empty!</h4>
            <h6>Add item to it now</h6>
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
