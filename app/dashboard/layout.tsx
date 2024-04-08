import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const layout = ({children}: React.PropsWithChildren) => {
  return (
    <div className='flex'>
        <div className='flex-[1] p-4 bg-lightBg'>
            <Sidebar/>
        </div>
        <div className="flex-[4] p-4 flex flex-col">
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default layout