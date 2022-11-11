import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import AppContext from '../../context/Context';
import { useContext } from 'react';

const Navbar = () => {
  const {user, tokens, logoutUser} = useContext(AppContext);
 
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <div className="flex flex-row justify-between items-center">

      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            {/* <img  className='rounded-full w-8 h-8' src={avatar} alt="" /> */}

            <div className="rounded-full w-8 h-8 bg-cyan-500 text-white text-bold flex items-center justify-center">
              <span className='text-bold'>N.H</span>
            </div>
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>
              { ' ' }   
              <span className='text-gray-400 text-14 font-bold ml-1'>{user.username}</span>
              <button onClick={logoutUser}>Logout</button>
            </p>
            <MdKeyboardArrowDown  className='text-gray-400 text-14'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar