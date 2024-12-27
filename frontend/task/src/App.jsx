import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alltask from './pages/Alltask'
import Importanttask from './pages/Importanttask'
import Completedtask from './pages/Completedtask'
import Incompletetask from './pages/Incompletetask'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
   <BrowserRouter>
  <div className='bg-green-400'>
  <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/home/alltask' element={<Alltask/>}/>
        <Route path='/home/important' element={<Importanttask/>}/>
        <Route path='/home/complete' element={<Completedtask/>}/>
        <Route path='/home/incomplete' element={<Incompletetask/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/> 
    </Routes>
  </div>
   </BrowserRouter>
  )
}

export default App
