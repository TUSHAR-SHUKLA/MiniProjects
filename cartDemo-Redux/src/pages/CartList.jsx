import React from 'react'
import { useSelector } from 'react-redux'; 

import { AddCartComponent } from '../components/AddCartComponent';
import { useTitle } from '../hooks/useTitle';
export const CartList = () => {
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total)

  // const cartList = [
  //    { "id": 1, "name": "Sony Wh-Ch510 Bluetootth Wireless", "price": 149, "image": "/images/pexels-garrettmorrow-1649771.jpg" },
  //   { "id": 2, "name": "boAt Rockerz 450 ", "price": 179, "image": "/images/pexels-garrettmorrow-1649771.jpg" },
  // ]
  useTitle("Cart")
  
  return (
    <div >
      <p className='font-bold text-center text-2xl m-5'>Cart Items: {cartList.length} / ${total}</p>
     
        {cartList.map((item)=>(
        <AddCartComponent key={item.id} item={item} />
    ))}
        
     
    </div>
  )
}
