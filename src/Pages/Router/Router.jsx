import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Profile from '../Profile/Profile'

const Router = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[20%] border border-l-slate-500'>
            <Sidebar />
        </div>
        <div className='w-full'>
            <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/username' element={<Profile />} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default Router
