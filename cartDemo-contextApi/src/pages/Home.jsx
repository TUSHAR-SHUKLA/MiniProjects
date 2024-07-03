import React from 'react'
import { Card } from '../components/Card'
import { useTitle } from '../hooks/useTitle'

export const Home = () => {
  useTitle("Home")
  const products=[
    { "id": 1, "name": "Sony Wh-Ch510 Bluetootth Wireless", "price": 149, "image": "/images/pexels-garrettmorrow-1649771.jpg"},
    { "id": 2, "name": "boAt Rockerz 450 ", "price": 179, "image": "/images/pexels-garrettmorrow-1649771.jpg"},
    { "id": 3, "name": "JBL tune 770NC ", "price": 169, "image": "/images/pexels-garrettmorrow-1649771.jpg"},
    { "id": 4, "name": "Logitech H11 wired ", "price": 189, "image": "/images/pexels-garrettmorrow-1649771.jpg"},
    { "id": 5, "name":"Zebronics Thunder" , "price": 199, "image": "/images/pexels-garrettmorrow-1649771.jpg"},
  ]
  return (
    <main className='flex flex-wrap my-20 justify-around'>
    {products.map((item)=>(
    <Card item={item} key={item.id} />
    ))}
   
    </main>
  )
}
