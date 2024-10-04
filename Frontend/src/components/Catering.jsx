import React, { useEffect, useState } from 'react'

import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Catering() {
  const[diet,setDiet]=useState([])
  useEffect(()=>{
    const getDiet=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/diet")
        console.log(res.data)
        setDiet(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getDiet();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-24 items-center justify-center text-center' >
          <h1 className='text-2xl font-semibold md:text-4xl absolute top-24 left-0 right-0 text-center'>Good Health Starts With <span className='text-green-500'>Good Food!!</span></h1>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2'>
            {
              diet.map((items)=>(
                <Cards key={items.id} item={items}/>
              ))
            }
          </div>
          </div>
          <div className='items-center justify-center text-center mb-2'>
            <p>
              jgvadk iwuernfoi uhwefsd 4wesdnj r3wefsdn wgrdf u8tjgrhwesd hwajbn nrshgbf hf 
              kfh oierfdj 
              s jrejdbngjj thk phojrot kjy
            </p>
            <Link to='/'>
            <button className='mt-6 bg-green-300 text-black px-4 py-2 rounded-md hover:bg-green-600 duration-300'>
              Back
            </button>
            </Link>
          </div>
        
    </>
  )
}

export default Catering