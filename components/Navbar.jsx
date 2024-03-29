import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/useStateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
      <div className="navbar-container">
          <p className="logo">
              <Link href="/">06 art</Link>
          </p>
          <p className="logo">
              <Link href="/">Contact</Link>
          </p>
          <p className="logo">
              <Link href="/">About</Link>
          </p>

          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
      </div>
  )
}

export default Navbar