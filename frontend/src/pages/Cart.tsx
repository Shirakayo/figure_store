import React from 'react';
import style from '../assets/css/Cart/Cart.module.scss'
import {selectCartItem} from "../redux/slice/CartSlice";
import {useSelector} from "react-redux";
import CartItem from "../components/CartItem/CartItem";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCartItem)
  
  return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Shopping Cart</h2>
        <div className={style.cart_outline_item}>
          <p className={style.cart_outline_item_title}>Total Quantity</p>
          <span className={style.cart_outline_item_total}>{items.length}</span>
        </div>
        <div className={style.cart_outline_item}>
          <p className={style.cart_outline_item_title}>Merchandise Total</p>
          <p className={style.cart_outline_item_totalprice}>{totalPrice} <span>JPY</span> </p>
        </div>
        <div className={style.button_wrapper}>
          <button className={style.button_checkout}> <span>Proceed to Checkout</span></button>
        </div>
        <div>
          {items.map(item =>
            <CartItem item={item}/>
          )}
        </div>
      </div>
    );
};

export default Cart;
