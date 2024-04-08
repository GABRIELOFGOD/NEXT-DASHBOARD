"use client"

import { SideMenu } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const noImg = '/images/no-profile-min.jpg'

const Sidebar = () => {
    const pathName = usePathname()
    
  return (
    <div className=' sticky left-0 text-sm overflow-auto top-4'>
      <div className='flex gap-3'>
        <Image className='rounded-full my-auto' src={noImg} alt='user-image' height={50} width={50} />
        <div className='my-auto '>
            <p className="font-[500]">GABRIEL</p>
            <p className="text-xs text-secondary">Administartor</p>
        </div>
      </div>

      <div className='pt-10'>
        {SideMenu.map((item, i) => (
            <div key={i}>
                <p className="text-xs text-secondary capitalize">{item.title}</p>
                <div>
                    {item.list.map((list, i) => (
                        <Link className={`px-5 py-3 flex my-1 rounded-md hover:bg-highlight gap-2 ${pathName == list.path && 'bg-highlight'}`} href={list.path} key={i}>
                            <span className='text-lg my-auto'>{list.icon}</span>
                            <p className='my-auto capitalize'>{list.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar