import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'

const ProfileUserDetails = () => {
  return (
    <div className='py-10'>
      <div className='flex'>
         <div className='w-[15%]'>
            <img className='w-32 h-32 rounded-full' src='https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg' alt=''/>
         </div>
         <div className='space-y-5'>
         <div className='flex items-center space-x-10'>
            <p>Username</p>
            <button>Edit Profile</button>
            <TbCircleDashed/>
         </div>
         <div className='flex items-center space-x-10'>
            <div className='space-x-1'>
                <span className='font-semibold'>10</span>
                <span >Posts</span>
            </div>
            <div className='space-x-1'>
                <span className='font-semibold'>5</span>
                <span>followers</span>
            </div>
            <div className='space-x-1'>
                <span className='font-semibold'>10</span>
                <span>following</span>
            </div>
         </div>
         <div>
            <p className='font-semibold'>FULL NAME</p>
            <p>🌊 Ocean Lover 🏄‍♂️
                🏋️‍♂️ Addicted to the Gym 💥
                👑 Living by My Own Code 👑
                📸 Life Through a Lens 🌟
                💻 Tech Savvy 🖥️
                </p>
         </div>
         </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails

