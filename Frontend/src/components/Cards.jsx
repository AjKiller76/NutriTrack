import React from 'react'
import atkin from '../assets/Atkin.jpg'

function Cards({item}) {
    console.log(item)
  return (
    <>
        <div className='m-3'>
        <div className="card card-side bg-base-100 shadow-xl mb-5 hover:scale-105 duration-200">
  <figure>
    <img
      src={atkin}
      alt="" 
      className='w-40 h-60'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.description}</p>
    <p className="text-lg font-bold text-gray-700">Price:{item.price} Rs only</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards