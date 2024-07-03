import React, { useEffect, useState } from 'react'
import HeadPhoneimg from '../assets/pexels-garrettmorrow-1649771.jpg'
import {add, remove} from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Card = ({item}) => {
    const [isInCart, setIsInCart] = useState(false);
    const { id,name, price, image}= item;
    const cartList = useSelector(state => state.cartState.cartList)
    const dispatch = useDispatch();
    const handleAdd = ()=>{
       dispatch(add(item))
       
    }
    const handleDelete = () => {
        dispatch(remove(item));
    }

    useEffect(()=>{
        const productInCart = cartList.find(item => item.id === id);
        if(productInCart){
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
    }, [cartList,id])
  return (

        <div className='w-80 mx-5 my-2  p-4 border'>
            <img className='rounded-lg' src={image} alt="" />
            <p className='font-semibold text-sm pt-4'>{name}</p>
            <div className='flex justify-between my-1 py-1 items-center'>
                <span className='font-semibold'>${price}</span>
              {isInCart ? (<button className=' rounded text-white p-2 bg-red-600' onClick={handleDelete}>Remove from Cart</button>): (<button className = ' rounded text-white p-2 bg-blue-600' onClick = { handleAdd }>Add to Cart</button>)}
                
            </div>
        </div>
    
     )
}
