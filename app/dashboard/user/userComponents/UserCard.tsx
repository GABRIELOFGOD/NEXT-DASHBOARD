import React from "react";

interface ItemProp {
  item: {
    name: string;
    amount: number;
  }
}

export const UserCard= ({item}: ItemProp) => {
  return(
    <div className='flex bg-lightBg hover:bg-highlight cursor-pointer duration-200 w-full p-2 rounded-md gap-3'>
      <div className='text-lg'>S</div>
      <div className='flex flex-col gap-2'>
        <p>Total {item.name}</p>
        <p className="font-bold text-lg">{item.amount}</p>
        {item.amount >= 0 ?
          <p className='text-[10px] text-secondary'><span className='text-green-500'>20%</span> greater than previous week</p>:
          <p className='text-[10px] text-secondary'><span className='text-red-500'>20%</span> lesser than previous week</p>
        }
      </div>
    </div>
  )
}