import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import ProfileTabsPart from '../../Components/ProfileComponents/ProfileTabsPart'

const Profile = () => {
  return (
    <div className='px-20'>
        <ProfileUserDetails/>
        <ProfileTabsPart/>
    </div>
  )
}

export default Profile
