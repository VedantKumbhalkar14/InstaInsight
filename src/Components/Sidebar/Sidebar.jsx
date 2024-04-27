import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from './SidebarConfig';
import {useNavigate} from 'react-router-dom';
const Sidebar = () => {
  const [activeTab,setActiveTab] = useState();
  const navigate = useNavigate();
  const handleClick=(title)=>{
      setActiveTab(title);
      if(title==='Profile') navigate('/username');
      if(title==='Home') navigate('/');
  }
  return (
    <div className='sticky top-0 h-[100vh]'>
    <div className='flex flex-col justify-between h-full px-10 shadow-2xl'>
      <div>
        <div className='mt-10'>
          <img className='w-40' src='/images/instainsight-logo.png' />

        </div>
        <div className='mt-10'>
            {menu.map(item=>(
                <div onClick={e=>handleClick(item.title)} className='flex items-center cursor-pointer mb-1'> 
                <p className='m-1 text-lg'>{activeTab===item.title ? item.activeIcon : item.icon} </p>
                <p className={`m-1 text-lg ${activeTab===item.title ? 'font-bold' : 'font-semibold'}`} >{item.title} </p>
                </div>
            ))}
        </div>
      </div>
      <div className='flex items-center font-semibold cursor-pointer mb-10'>
          <IoReorderThreeOutline /> <p className='ml-4'>More</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
