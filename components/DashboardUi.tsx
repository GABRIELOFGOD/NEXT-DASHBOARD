"use client"

import { CardDeal, DummyTransactions } from '@/utils/constants'
import React, { useState } from 'react'
import DashboardCard from './DashboardCard'
const userImage = '/images/no-profile-min.jpg'

// const transactionStatusClass = () => {
//   let transaction
// }

const DashboardUi = () => {
  // const [gotTransactionImg, setGotTransactionImg] = useState<Boolean>(true)
  
  return (
    <div className='flex flex-col gap-5 px-2 py-5'>
      <div className='flex gap-5 justify-between'>
        {CardDeal.map((card, i) => (
          <DashboardCard
            key={i}
            deal={card}
          />
        ))}
      </div>

      {/* =========== TRANSACTION TABLE ================ */}
      <div className='w-full bg-lightBg p-5 rounded-sm'>
        <p className="font-semibold mb-5 text-secondary">Latest Transactions</p>
        <table className='w-full'>
          <thead>
            <tr className='text-xs text-secondary'>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {DummyTransactions.map((transaction, i) => (
              <tr
                key={i}
                className='w-fit px-5 hover:bg-highlight rounded-sm duration-200 py-1 cursor-pointer'
              >
                <td className='flex gap-2'>
                  {/* {transaction.img && <img width={25} height={25} className='rounded-full my-auto' src={transaction.img} alt='transaction img' />} */}
                  <p className="my-auto capitalize">{transaction.transaction}</p>
                </td>
                <td className={`text-xs w-fit rounded-sm ${transaction.status == 'pending' ? 'text-yellow-500' : transaction.status == 'complete' ? 'text-green-500' : transaction.status == 'failed' ? 'text-red-700' : 'text-red-500'} `}>{transaction.status}</td>
                <td className='text-xs'>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardUi