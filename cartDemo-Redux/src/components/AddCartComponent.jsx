import React from 'react'
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

export const AddCartComponent = ({item}) => {
    const {id, name, price, image} = item;
    const dispatch = useDispatch()
    const handleDelete=()=>{
      dispatch(remove(item));
    }

  return (
      <div className='flex justify-between items-center border p-4 m-5 '>
     <div>
         <img src={image} className="rounded-lg w-24 mr-4" />
    </div>
        <p className='mr-4'>{name}</p>
        <p className='mr-4'>${price}</p>
        <button onClick={handleDelete} className='bg-red-600 p-2 rounded text-white ' >Remove</button>
    </div>
  )
}
