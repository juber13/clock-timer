import React from 'react'
import { PiTimerThin } from "react-icons/pi";

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Logged out', { position: "top-center" })
    navigate('/login')
  }



  return (
    <div className='p-4 shadow-md flex items-center justify-between'>
      <h3 className='flex items-center gap-2'>Timer <PiTimerThin size={"20px"}/></h3>
      {localStorage.getItem('user') ? <button className='border p-2 text-xs rounded-md shadow-md' onClick={handleLogout}>Logged Out</button> : ""}
    </div>
  )
}

export default Header