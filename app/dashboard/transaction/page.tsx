import React from 'react'
import { transactions } from './transactions';

const Transaction = () => {
  return(
    <div className='mt-10'>
      <div>
        <p className="font-semibold text-primary mb-5 text-xl">All transactions</p>
      </div>
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
            {transactions.map((transaction, i) => (
              <tr
                key={i}
                className='w-fit px-5 hover:bg-highlight rounded-sm duration-200 py-1 cursor-pointer'
              >
                <td className='flex gap-2'>
                  {/* {transaction.img && <img width={25} height={25} className='rounded-full my-auto' src={transaction.img} alt='transaction img' />} */}
                  <p className="my-auto capitalize">{transaction.name}</p>
                </td>
                <td className={`text-xs w-fit rounded-sm capitalize ${transaction.status == 'pending' ? 'text-yellow-500' : transaction.status == 'success' ? 'text-green-500' : transaction.status == 'failed' ? 'text-red-700' : 'text-red-500'} `}>{transaction.status}</td>
                <td className='text-xs'>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Transaction;