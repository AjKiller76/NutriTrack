import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider';

function UserProfile() {
    const [authUser]=useAuth();
  return (
    <>
        <div className="profile-page flex flex-col bg-green-50 pt-20 rounded-md text-center items-center justify-center">
             <h1 className=' text-center text-3xl font-extrabold'>Profile</h1>
            <div >
            <div className="avatar placeholder items-center text-center justify-center">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                <span className="text-7xl">{authUser.fullname[0]}</span>
            </div>
            </div>
                <p className='flex pl-5 pt-8'><strong>Full Name:</strong> {authUser.fullname}</p>
                <p className='flex pl-5'><strong>Email:</strong> {authUser.email}</p>
                 <p className='pl-5 pb-8'><strong>ID:</strong> {authUser._id}</p>
             </div>
        </div>

</>
  );
}

export default UserProfile