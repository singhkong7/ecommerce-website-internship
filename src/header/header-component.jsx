import React from 'react';
import './header-component.scss';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {ReactComponent as Logo} from "../header/crown.svg";
import {auth} from "../firebase/firebase-utility";
const Header= ({currentUser}) =>
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
                (<div className="option" onClick={()=> auth.signOut()}>
                    <h2>SIGN OUT</h2>
                </div>)
                :
                (<Link className="option" to="/sign">
                    <h2>SIGN IN</h2>
                </Link> )
            }
        </div>
    </div>
);
const mapToStateProps= state => {
    console.log(state)
    return {

        currentUser:state.currentUser
    }
}
;

export default connect(mapToStateProps)(Header);