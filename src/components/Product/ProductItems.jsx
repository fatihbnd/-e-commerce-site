import { AnimatePresence } from 'motion/react'
import { motion } from "motion/react"
import React, { useState } from 'react'

const ProductItems = ({img,head,basePrice,salePrice}) => {
    const [ditItHover, setditItHover] = useState(false)
  return (
    <div
    onMouseEnter={() =>setditItHover(true)}
    onMouseLeave={() =>setditItHover(false)}
    className='flex flex-col gap-2 items-center justify-center border border-gray-300 p-4 mt-5 relative bg-amber-50 max-w-[350px]'>
        <img src={`/img/${img}.jpg`} className='w-full'></img>
        <h3 className='font-bold'>{head}</h3>
        <div className='items-center flex gap-2'>
            <span className='line-through text-sm'>{basePrice}</span> <span className='text-red-500 text-xl'>{salePrice}</span>
        </div>
        <AnimatePresence>
            {ditItHover &&(
                <>
                    <motion.div
                    initial={{opacity:0,x:20}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:20}}
                    className='absolute right-5 flex-col gap-3 flex'>
                        <a className='bg-white p-3 w-10 h-10 cursor-pointer'>
                            <img src='/img/resize.png'></img>
                        </a>
                        <a className='bg-white p-3 w-10 h-10 cursor-pointer'>
                            <img src='/img/hearth.png'></img>
                        </a>
                        <a className='bg-white p-3 w-10 h-10 cursor-pointer'>
                            <img src='/img/share.png'></img>
                        </a>
                    </motion.div>

                    <motion.div 
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:20}}
                    className='absolute bottom-25 w-2/3 flex items-center justify-center cursor-pointer'>
                        <a className='bg-[#222222] p-3 w-full text-center text-white flex items-center justify-center gap-2'>
                            <img src='/img/cart.png' className='size-5'></img>
                            Sepete Ekle</a>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
  )
}

export default ProductItems