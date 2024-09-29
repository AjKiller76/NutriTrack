import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
        <div className='m-3'>
        <div className="card card-side bg-base-100 shadow-xl mb-5 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-green-600 hover:bg-green-700 border border-green-600 hover:border-green-700">View</button>
    </div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards