import React from 'react'
import { deal } from '.'

const DashboardCard = ({deal}:deal) => {
  return (
    <div className='flex bg-lightBg hover:bg-highlight cursor-pointer duration-200 w-full p-2 rounded-md gap-3'>
      <div className='text-lg'>{deal.icon}</div>
      <div className='flex flex-col gap-2'>
        <p>Total {deal.name}</p>
        <p className="font-bold text-lg">{deal.total}</p>
        {deal.rate >= 0 ?
          <p className='text-[10px] text-secondary'><span className='text-green-500'>{deal.rate}%</span> greater than previous week</p>:
          <p className='text-[10px] text-secondary'><span className='text-red-500'>{deal.rate}%</span> lesser than previous week</p>
        }
      </div>
    </div>
  )
}

export default DashboardCard