import React from 'react';
import './header-component.scss';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {ReactComponent as Logo} from "../header/crown.svg";
import {auth} from "../custom-button/firebase/firebase-utility";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart/cart-item";
const Header= ({currentUser,hidden}) =>
(
    <div className="Header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                <h2>SHOP</h2>
            </Link>
            <Link className="option" to=" /contact">
                <h2>CONTACT</h2>
            </Link>
            
            {
                currentUser ?
                (
                    <div className="option" onClick={()=> auth.signOut()}>
                        SIGN OUT
                    </div>
                )
                :
                (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link> 
                )
            }
            <CartIcon />
        </div>
        {
            hidden?null:<CartDropdown />
        }
    </div>
);
const mapToStateProps= ({user:{currentUser},cart:{hidden}}) => ({
    
    currentUser,
    hidden
})
;

export default connect(mapToStateProps)(Header);