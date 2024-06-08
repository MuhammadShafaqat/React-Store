// components/cart/CartItems.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { BsTrash } from 'react-icons/bs';
import { removeFromCart, emptyCart } from '../../redux/reducers/cart';

const CartItems = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartItems);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  // const grandTotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);
   // Ensure grandTotal calculation handles an empty array
  const grandTotal = products.length > 0 ? products.reduce((total, product) => total + (product.price * product.quantity), 0) : 0;

  return (
    <div>
      {products.length !== 0 ? (
        <div className="container">
          <div className={styles.card_table}>
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
                      <td style={{ width: '32%' }}>{item.description}</td>
                      <td style={{ width: '12%', fontWeight: 'bold' }}>${item.price}</td>
                      <td style={{ width: '12%' }}>{item.quantity}</td>
                      <td style={{ width: '12%' }}>${item.price * item.quantity}</td>
                      <td>
                        <button onClick={() => handleRemoveItem(item)} className="btn btn-danger">
                          <BsTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="4"></td>
                    <td><button onClick={handleEmptyCart} className="btn btn-danger">Empty Cart</button></td>
                    <td><Link to="/" className="btn btn-primary">Shop More</Link></td>
                    <td><Link to="/checkoutPage" className="btn btn-success">Checkout</Link></td>

                    {/* <td><button className="btn btn-success">Checkout</button></td> */}
                    <td><strong>Grand Total : ${grandTotal}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className={styles.card}>
            <h5 className="card-title">My Cart</h5>
          </div>
          <div className={styles.center}>
            <img src="https://rukminim1.flixcart.com/www/550/550/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
            <h4>Your cart is empty!</h4>
            <h6>Add item to it now</h6>
            <Link to="/" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
