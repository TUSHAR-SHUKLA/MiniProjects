import React from 'react'
import HeadPhoneimg from '../assets/pexels-garrettmorrow-1649771.jpg'
import { useCart } from '../context/CartContext';


export const Card = ({item}) => {
    const { name, price, image}= item;
    
    const {addToCart, cartList} = useCart();
    const handleAdd = ()=>{
        addToCart(item)
    }

  return (

        <div className='w-80 mx-5 my-2  p-4 border'>
            <img className='rounded-lg' src={image} alt="" />
            <p className='font-semibold text-sm pt-4'>{name}</p>
            <div className='flex justify-between my-1 py-1 items-center'>
                <span className='font-semibold'>${price}</span>
                <button onClick={handleAdd} className=' rounded text-white p-2 bg-blue-600'>Add to Cart</button>
            </div>
        </div>
    
     )
}
