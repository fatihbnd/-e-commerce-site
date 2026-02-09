import React from 'react'

const ShoppingCartItems = ({icon,title,price}) => {
  return (
    <div className='flex items-center w-full gap-3 relative'>
        <img src={`img/${icon}.jpg`} className='size-15'></img>
        <div>
            <p className='text-md bold'><b>{title}</b></p>
            <p className='text-sm'>{`${price} TL`}</p>
        </div>
        <img src='/img/close.png' className='size-5 right-0 absolute'></img>
    </div>
  )
}

export default ShoppingCartItems