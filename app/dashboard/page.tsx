import DashboardRightBar from '@/components/DashboardRightBar'
import DashboardUi from '@/components/DashboardUi'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex-[3]'>
        <DashboardUi />
      </div>
      <div className='flex-[1]'>
        <DashboardRightBar />
      </div>
    </div>
  )
}

export default page