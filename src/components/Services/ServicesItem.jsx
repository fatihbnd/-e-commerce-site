import React from 'react'

const ServicesItem = ({img,head,text}) => {
  return (
    <div className='flex gap-2 items-center'>
        <img src={`/img/${img}.png`} className='size-10'></img>
        <div>
            <h3 className='font-bold text-md text-white'>{head}</h3>
            <span className='text-sm text-gray-300'>{text}</span>
        </div>
    </div>
  )
}

export default ServicesItem