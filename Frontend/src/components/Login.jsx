import React from 'react'
import Sign from './Sign'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br/>
                    <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("email", { required: true })} />
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Password</span>
                    <br/>
                    <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("password", { required: true })} />
                </div>
                <div className='flex justify-around mt-4'>
                    <Link to='/' className='bg-green-300 text-black rounded-md px-3 py-1 hover:bg-green-600 duration-200'>Login</Link>
                    <p>
                        Not Registered?{" "}
                        <span className='underline text-blue-500 cursor-pointer'>
                            <a href='/Sign'>Signup</a>
                        </span>
                    </p>
                </div>
        </div>
        </dialog>
    </div>
    </>
  )
}

export default Login