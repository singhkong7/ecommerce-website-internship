import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartDescription from "../cart-description/cart-description";
import {selectCartItems} from "../Redux/cart/cart-selector";
import { connect } from 'react-redux';
import "./cart-dropdown.scss";
const CartDropdown= ({cartItems}) =>
(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem => (
                <CartDescription key={cartItem.id} item={cartItem} />
            ))
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps=state=>({
    cartItems:selectCartItems(state)
    
});
  
  export default connect(mapStateToProps)(CartDropdown);
