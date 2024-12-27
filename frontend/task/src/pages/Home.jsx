import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-green-400 h-screen flex gap-4 p-3'>
      <div className='shadow-2xl rounded-xl bg-green-100 p-4 h-full w-1/4 '>
        <Sidebar/>
      </div>
      <div className=' bg-green-100 rounded-xl shadow-2xl  w-3/4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home
