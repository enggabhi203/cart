import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
//import Popup from './Popup'
import ConnectedPopup from '../containers/ConnectedPopup'

const Cart = ({ objstate, onClick, onCartClick, closePopup }) => {
    let cartView;
    /* if (objstate.isCartVisible === true) {
        cartView =
            <div>
                <div className='inline'>I am here</div>
                <div className='inline'>I am there</div>
            </div>
    } else {
        cartView = null;
    } */

    console.log(objstate.isCartVisible, "required");

    return (
        <div className="cart">
            <span id="itemCount" className="fa fa-shopping-cart" onClick={() => onCartClick(cartView)}>{objstate.cart.length}</span>
            <button className="buttonSetup" onClick={(onClick)}>Empty Cart</button>
            {objstate.isCartVisible ? <ConnectedPopup closePopup={closePopup} /> : null}
        </div>
    )
}

export default Cart