import React from 'react';
import {MdShoppingCart} from 'react-icons/md';

//rfce  precica za funkciju
function NavBar() {
  return (
    <div className="navBar">
        <a>Moj bioskop</a>
        <div className="cart-items">
          <MdShoppingCart />
          <p className="cart-num">0</p>
        </div>
    </div>
  );
}

export default NavBar;