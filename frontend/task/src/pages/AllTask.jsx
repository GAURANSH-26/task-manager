import React, { useState } from 'react'
import Card from '../components/Card'
import InputTask from '../components/Home/InputTask'

const Alltask = () => {
  const[addForm, setAddForm]=useState(false)
  return (
    <>
      <div>
        <button 
        onClick={()=>setAddForm('true')}
        className='p-1 font-semibold text-xs m-3 bg-green-700 rounded-md text-white  hover:bg-green-600'>
          Add Task
        </button>
        <Card alltask={'true'}  addForm={()=>setAddForm(true)}/>
      </div>
      {addForm && (
      <div>
         <InputTask onClose={()=>setAddForm(false)}/>
      </div>
      )}
    </>
  )
}

export default Alltask
