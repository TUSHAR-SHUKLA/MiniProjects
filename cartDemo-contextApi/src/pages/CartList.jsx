import React from 'react'

import { useCart } from '../context/CartContext';

import { AddCartComponent } from '../components/AddCartComponent';
import { useTitle } from '../hooks/useTitle';
export const CartList = () => {

  const {total, cartList} = useCart()
  useTitle("Cart")
  
  return (
    <div >
      <p className='font-bold text-center text-2xl m-5'>Cart Items: {cartList.length} / {total}</p>
     
        {cartList.map((item)=>(
        <AddCartComponent key={item.id} item={item} />
    ))}
        
     
    </div>
  )
}
