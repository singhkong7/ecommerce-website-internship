import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartDescription from "../cart-description/cart-description";
import {selectCartItems} from "../Redux/cart/cart-selector";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import "./cart-dropdown.scss";
import toggleCartHidden from "../Redux/cart/cart-action";
const CartDropdown= ({cartItems,history,dispatch}) =>
(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? (
            cartItems.map(cartItem => (
                <CartDescription key={cartItem.id} item={cartItem} />
            ))
            ):(
                <span className="empty">Your Cart is empty</span>
            )
        }
        </div>
        <CustomButton  onClick={
                ()=>{history.push('/checkoutpage');
                dispatch(toggleCartHidden());  
            }}
        >
            <span className="go-to">GO TO CHECKOUT</span>
        </CustomButton>
    </div>
);
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
    
});
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));
