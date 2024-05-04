import React, { useState } from 'react'
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import { RiDeleteBin2Line, RiDeleteBin3Fill, RiDeleteBinLine, RiSendPlaneLine } from 'react-icons/ri'

const Posts = () => {
    const [showOptions,setShowOptions] = useState(false);
    const [isPostLiked,setIsPostLiked] = useState(false);
    const [isSaved,setIsSaved] = useState(false);

    const handleIsPostLiked = ()=>{
        setIsPostLiked(!isPostLiked);
    }
    const handleSavedPosts = ()=>{
        setIsSaved(!isSaved);
    }
  return (
    <div className='p-2 mt-5'>
      <div className='flex p-4 w-full border justify-between'>
        <div className='flex px-1 space-x-2'>
        <div>
            <img className='w-10 h-10 rounded-full' src='https://c4.wallpaperflare.com/wallpaper/529/555/624/mask-neon-person-photography-wallpaper-preview.jpg' alt='' />
        </div>
        <div>
            <p className='font-semibold text-sm'>Username</p>
            <p className='font-light text-sm'>Location</p>
        </div>
        </div>
        <div>
            <BsThreeDots className='cursor-pointer' onClick={()=>setShowOptions(!showOptions)}/>
            {showOptions && <div className='cursor-pointer w-full border rounded-md p-2 z-[1]'><RiDeleteBinLine className='size-5'/></div>}
            </div>
      </div>
      <div className='w-full'>
        <img className='w-full' src='https://c4.wallpaperflare.com/wallpaper/273/935/829/spider-man-homecoming-2017-marvel-cinematic-universe-movies-spider-man-wallpaper-preview.jpg' alt='' />
      </div>
    <div className='flex justify-between items-center'>
        <div className='flex space-x-2 p-2'>
           {isPostLiked ? (<AiFillHeart onClick={handleIsPostLiked} className='text-2xl hover:opacity-50 cursor-pointer text-red-600' />) : (<AiOutlineHeart onClick={handleIsPostLiked} className='text-2xl hover:opacity-50 cursor-pointer'/>)  }
           <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
            <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
        </div>
        <div className='p-2'>
            {isSaved ? (<BsBookmarkFill onClick={handleSavedPosts} className='text-xl hover:opacity-50 cursor-pointer' />): (<BsBookmark onClick={handleSavedPosts} className='text-xl hover:opacity-50 cursor-pointer' />) }
        </div>
    </div>
    </div>
  )
}

export default Posts
