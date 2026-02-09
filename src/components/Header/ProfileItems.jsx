import React from 'react'

const ProfileItems = ({icon , text}) => {
  return (
    <div className='flex items-center gap-3'>
        <img src={`/img/${icon}.png`} className='size-4'></img>
        <a href='' className='hover:underline'>{text}</a>
    </div>
  )
}

export default ProfileItems