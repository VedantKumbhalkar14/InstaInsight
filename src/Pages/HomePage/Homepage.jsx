import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import Posts from '../../Components/Posts/Posts'

const Homepage = () => {
  return (
    <div className='w-full flex items-center px-10 justify-center'>
      <div className='w-[44%] px-10'>
        <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
        {[1,1,1,1].map(story=><StoryCircle/>)}
        </div>
        <div>
          {[1,1].map(post=><Posts/>)}
        </div>
      </div>
      <div className='w-[35%]'>
        <HomeRight/>
      </div>
    </div>
  )
}

export default Homepage
