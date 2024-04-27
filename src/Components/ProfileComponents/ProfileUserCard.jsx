import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./css/ProfileUserCard.css";

const ProfileUserCard = () => {
  return (
    <div className='p-2'>
    <div className='w-72 post'>
      <div>
        <img src='https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg' alt='' />
      </div>
      <div className='overlay'>
      <div className='overlay-text flex justify-between'>
        <div>
            <AiFillHeart/> <span>10</span>
        </div>
        <div>
            <FaComment/> <span>30</span>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileUserCard
