import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Card = ({alltask, addForm}) => {
  const [status, setStatus] = useState('Complete')
  const taskData = [
    {
      titele: 'Lorem ipsom',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos maiores nostrum cum ipsam ',
      status: 'Complete'
    },
    {
      titele: 'Lorem ipsom',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos maiores nostrum cum ipsam ',
      status: 'In Complete'
    },
    {
      titele: 'Lorem ipsom',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos maiores nostrum cum ipsam ',
      status: 'In Complete'
    },
    {
      titele: 'Lorem ipsom',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos maiores nostrum cum ipsam ',
      status: 'Complete'
    },
    {
      titele: 'Lorem ipsom',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos maiores nostrum cum ipsam ',
      status: 'Complete'
    },
  ]
  return (
    <>
 
      <div className='grid grid-cols-3 gap-4 p-3'>
        {taskData.map((item, index) => (
          <div key={index}
            className='shadow-lg rounded-xl p-6 bg-green-200 transition-all hover:border-green-500 border'
          >
            <h1 className='font-semibold text-lg'>{item.titele}</h1>
            <p className='text-sm text-green-600 font-semibold'>{item.text}</p>
            <div className='flex justify-between mt-5'>
              <button className={`${item.status === 'In Complete' ? 'bg-red-600' : 'bg-green-700'} rounded-lg text-white text-xs font-semibold p-2 hover:bg-green-600`}>{item.status}</button>
              <button className='border-none text-2xl px-3'><MdFavoriteBorder /></button>
              <button className='rounded-md bg-blue-700 text-white text-xs font-semibold px-3 hover:bg-blue-500'><FaEdit /></button>
              <button className='rounded-md bg-red-600 text-white text-xs font-semibold px-3 hover:bg-red-500'><MdDelete /></button>
            </div>
          </div>
        ))}
        {alltask==="true" && (
        <div className="shadow-lg rounded-xl p-6 bg-green-200 border border-transparent hover:border-green-500">
          <div className="flex flex-col items-center justify-center h-full space-y-2" onClick={addForm}>
            <span className="text-4xl text-green-600">
              <IoMdAddCircle />
            </span>
            <span className="text-lg font-medium text-green-700">Add Task</span>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default Card
