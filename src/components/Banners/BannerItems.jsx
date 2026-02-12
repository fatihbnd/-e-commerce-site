import React from 'react'

const BannerItems = ({bg,img,text,text2}) => {
  return (
    <div className={`${bg} w-auto items-center justify-center relative h-[400px] m-4 BannerItem`}>
            <img src={`/img/${img}.png`} className='w-full h-full BannerImg'></img>
            <div className=' bg-white absolute bottom-0 left-0 w-3/4 h-45 opacity-80 flex flex-col p-4 gap-2'>
                <span className='bg-black w-fit py-1.5 px-3 rounded-4xl text-white'>{text}</span>
                <h3 className='font-bold lg:text-2xl md:text-lg text-2xl'>{text2}</h3>
                <a href='' className='bg-[var(--color-primary)] w-fit p-2'>Hemen Al</a>
            </div>
        </div>
  )
}

export default BannerItems