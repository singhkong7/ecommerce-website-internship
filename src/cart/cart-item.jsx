import React from "react";
import {ReactComponent as ShoppingIcon} from "../cart/shopping-bag.svg";
import {connect} from "react-redux";
import toggleCartHidden from "../Redux/cart/cart-action";
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../Redux/cart/cart-selector";
import "./cart-item.scss";
const CartIcon= ({toggleCartHidden,itemCount}) =>
(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
    
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);