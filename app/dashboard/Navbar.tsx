"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathName = usePathname()
  
  return (
    <div className='bg-lightBg rounded-md justify-between flex p-2'>
      <p className="text-secondary font-semibold my-auto capitalize">{pathName?.split('/').pop()}</p>

      <div className='flex my-auto gap-3'>
        <div className='flex gap-1 rounded-md bg-highlight p-2'>
          <span className='my-auto'><MdSearch /></span>
          <input type="text" className='text-primary bg-transparent border-none outline-none text-xs' placeholder='search...' />
        </div>
        <div className="flex gap-2 my-auto">
          <MdOutlineChat />
          <MdNotifications />
          <MdPublic />
        </div>
      </div>
    </div>
  )
}

export default Navbar