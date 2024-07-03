import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';


export const Header = () => {
  const {cartList} = useCart();
  return (
    <header className='flex p-5 justify-between items-center shadow-md rounded-lg '>
        <div className='font-semibold text-xl'>Shopping Cart</div>
        <div>
            <NavLink to="/" className='mr-2 p-3 border rounded-lg hover:bg-slate-100' end>Home</NavLink>
              <NavLink to="/cart" className='mr-2 p-3 border rounded-lg hover:bg-slate-100'>Cart</NavLink>
        </div>
        <div>
              <span>Cart:</span><span className='count'>{cartList.length}</span>
        </div>
    </header>
  )
}
