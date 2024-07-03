import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



export const Header = () => {
  const items = useSelector(state => state.cartState.cartList.length)
  return (
    <header className='flex p-5 justify-between items-center shadow-md rounded-lg '>
        <div className='font-semibold text-xl'>Shopping Cart - REDUX </div>
        <div>
            <NavLink to="/" className='mr-2 p-3 border rounded-lg hover:bg-slate-100' end>Home</NavLink>
              <NavLink to="/cart" className='mr-2 p-3 border rounded-lg hover:bg-slate-100'>Cart</NavLink>
        </div>
        <div>
              <span>Cart:</span><span className='count'>{items}</span>
        </div>
    </header>
  )
}
