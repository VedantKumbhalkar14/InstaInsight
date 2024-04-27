import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import { RiVideoAddLine } from 'react-icons/ri'
import ProfileUserCard from './ProfileUserCard'

const ProfileTabsPart = () => {
    const [activeTab,setActiveTab] =useState();
    const tabs = [
        {
            tab:"Posts",
            icon: <AiOutlineTable/>,
            activetab:""
        },
        {
            tab:"Reels",
            icon: <RiVideoAddLine/>,
            
        },
        {
            tab:"Saved",
            icon: <BiBookmark/>,
            
        },
        {
            tab:"Tagged",
            icon: <AiOutlineUser/>,
        }
    ]
  return (
    <>
    <div className='border-t border-black px-60'> 
    <div className='flex  space-x-10'>
      {tabs.map(tab=>(
        <div onClick={()=>setActiveTab(tab.tab)} className={`cursor-pointer flex items-center space-x-1 ${activeTab===tab.tab ? "border-t border-black":"opacity-60"}`}>
            {tab.icon}
            <span>{tab.tab}</span>
        </div>
      ))}
    </div></div>

    {activeTab==='Posts' && <div className='flex flex-wrap mt-10'>
        {[1,1,1,1,1,1].map(item=>(
            <ProfileUserCard/>
        ))}
        
    </div>}
    </>
  )
}

export default ProfileTabsPart
