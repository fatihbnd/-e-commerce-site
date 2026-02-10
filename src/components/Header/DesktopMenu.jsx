import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import ProfileItems from './ProfileItems'
import FavoriteItems from './FavoriteItems'
import ShoppingCartItems from './ShoppingCartItems'
import Menuİtems from './Menuİtems'

const DesktopMenu = () => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isFavoriteMenuOpen, setisFavoriteMenuOpen] = useState(false);
    const [isShoppingCartMenuOpen, setIsShoppingCartMenuOpen] = useState(false);
    const [isCategoryMenuOpen, setisCategoryMenuOpen] = useState(false)
    const ShoppingCartMenuRef = useRef(null)
    const AccountMenuRef = useRef(null);
    const FavoriteMenuRef = useRef(null)
    const CategoryMenuRef = useRef(null)
    const cartItems = [
        { id: 1, icon: 'urun1', title: 'Ürün 1', price: 500 },
        { id: 2, icon: 'urun1', title: 'Ürün 2', price: 500 },
        { id: 3, icon: 'urun1', title: 'Ürün 3', price: 500 },
        { id: 4, icon: 'urun1', title: 'Ürün 4', price: 500 },
    ]
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    )

    const toggleCategoryMenu = () => {
        setisCategoryMenuOpen(prev => !prev)
    }

    const toggleShoppingCartMenu = () => {
        setIsShoppingCartMenuOpen(prev => !prev)
    }

    const toggleFavoriteMenu = () => {
        setisFavoriteMenuOpen(prev => !prev)
    }

    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(AccountMenuRef.current && 
            !AccountMenuRef.current.contains(event.target)){
                setIsAccountMenuOpen(false);
            }
        }

        if(isAccountMenuOpen){
            document.addEventListener('click',handleClickOutside)
        }
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    },[isAccountMenuOpen])

    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(FavoriteMenuRef.current &&
            !FavoriteMenuRef.current.contains(event.target)){
                setisFavoriteMenuOpen(false)
            }
        }
        if(isFavoriteMenuOpen){
            document.addEventListener('mousedown',handleClickOutside)
        }
        return () =>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    }, [isFavoriteMenuOpen])

    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(CategoryMenuRef.current &&
            !CategoryMenuRef.current.contains(event.target)){
                setisCategoryMenuOpen(false)
            }
        }
        if(isCategoryMenuOpen){
            document.addEventListener('click', handleClickOutside)
        }
        return () =>{
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isCategoryMenuOpen])
    
    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(ShoppingCartMenuRef.current &&
            !ShoppingCartMenuRef.current.contains(event.target)){
                setIsShoppingCartMenuOpen(false)
            }
        }
        if(isShoppingCartMenuOpen){
            document.addEventListener('mousedown',handleClickOutside)
        }
        return () =>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    }, [isShoppingCartMenuOpen])
    
  return (
    <div className='flex w-full flex-col'>
        <div className='flex justify-between items-center w-full pl-5 pr-5'>
            <img src='/img/logo.png'></img>

            <div className=" flex items-center justify-center p-4 w-1/2 relative">
                <input type="text"
                placeholder="Bi şeyler ara"
                className="border border-gray-300 py-1 px-2 pr-11 w-full"></input>
                                
                <button className="bg-[var(--color-primary)] w-10 absolute h-8 right-4">Ara</button>
            </div>

            <div className='flex gap-4'>
                <div 
                className='relative' 
                ref={AccountMenuRef}>
                    <img 
                    src='/img/profile.png' 
                    className="size-7 cursor-pointer"
                    onClick={toggleAccountMenu}></img>
                    <AnimatePresence>
                        {isAccountMenuOpen && (
                        <motion.div 
                        className='w-50 absolute -right-10 top-10 p-3 border-t-4 border-[var(--color-primary)] gap-3 flex flex-col text-sm shadow-md bg-white'
                        initial={{y:-100, opacity:0,scale:0 }}
                        animate={{y:0, opacity:1,scale:1 }}
                        exit={{y:-100, opacity:0,scale:0 }}
                        transition={{ duration: 0.3 }}>
                            <ProfileItems icon={'profile'} text={'Bilgilerim'}></ProfileItems>
                            <ProfileItems icon={'orders'} text={'Tüm şiparişlerim'}></ProfileItems>
                            <ProfileItems icon={'review'} text={'Değerlendirmelerim'}></ProfileItems>
                            <ProfileItems icon={'discount'} text={'İndirim kuponlarım'}></ProfileItems>
                            <ProfileItems icon={'exit'} text={'Çıkıs Yap'}></ProfileItems>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                <div
                className="relative" 
                ref={FavoriteMenuRef}>
                    <img 
                    src="/img/hearth.png" 
                    className="size-7 cursor-pointer"
                    onClick={toggleFavoriteMenu}></img>
                    <div className="absolute bg-[var(--color-primary)] rounded-full w-5 h-5 flex items-center justify-center -top-2 -right-3">1</div>
                    <AnimatePresence>
                        {isFavoriteMenuOpen &&(
                            <motion.div 
                            className='w-60 flex flex-col gap-3 top-10 right-0 absolute border-t-4 border-[var(--color-primary)] shadow-md p-3 bg-white'
                            initial={{y:-200, opacity:0,scale:0 }}
                            animate={{y:0, opacity:1,scale:1 }}
                            exit={{y:-200, opacity:0,scale:0 }}
                            transition={{ duration: 0.3 }}>
                                <FavoriteItems icon={'urun1'} title={'Urun Basligi'} price={500}></FavoriteItems>
                                <FavoriteItems icon={'urun1'} title={'Urun Basligi'} price={500}></FavoriteItems>
                                <FavoriteItems icon={'urun1'} title={'Urun Basligi'} price={500}></FavoriteItems>
                                <FavoriteItems icon={'urun1'} title={'Urun Basligi'} price={500}></FavoriteItems>
                                <FavoriteItems icon={'urun1'} title={'Urun Basligi'} price={500}></FavoriteItems>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div 
                className="relative"
                ref={ShoppingCartMenuRef}>
                    <img 
                    src="/img/shopping-bag.png" 
                    className="size-7 cursor-pointer"
                    onClick={toggleShoppingCartMenu}></img>
                    <div className="absolute bg-[var(--color-primary)] rounded-full w-5 h-5 flex items-center justify-center -top-2 -right-3">1</div>
                    <AnimatePresence>
                        {isShoppingCartMenuOpen &&(
                            <motion.div 
                            className='w-60 flex flex-col gap-3 top-10 right-0 absolute border-t-4 border-[var(--color-primary)] shadow-md p-3 bg-white'
                            initial={{y:-200, opacity:0,scale:0 }}
                            animate={{y:0, opacity:1,scale:1 }}
                            exit={{y:-200, opacity:0,scale:0 }}
                            transition={{ duration: 0.3 }}>
                                {cartItems.map(item => (
                                    <ShoppingCartItems
                                    key={item.id} 
                                    icon={item.icon}
                                    title={item.title}
                                    price={item.price}
                                    />
                                ))}
                            <div className="border-t pt-2 text-right font-bold flex justify-between">
                                <span>Total:</span>
                                <span>{`${totalPrice} TL`}</span>
                            </div>
                            <button className='bg-[var(--color-primary)] p-3 hover:opacity-70'>Sepete Git</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
        <div className='w-full bg-[var(--color-primary)] flex gap-10 items-center justify-center p-1'>
            <div 
            className='p-4 bg-white rounded-t-2xl flex justify-center items-center gap-3 relative w-50 shadow-md cursor-pointer select-none'
            onClick={(e) => {e.stopPropagation(); toggleCategoryMenu()}}>
                <img src='/img/category.png' className='size-5'></img>
                Katogoriler
                <img src='/img/arrow-down.png' className='size-5'></img>
                <AnimatePresence>
                    {isCategoryMenuOpen && (
                        <motion.div
                        ref={CategoryMenuRef}
                        onClick={(e) => e.stopPropagation()}
                        className='absolute bg-white top-14 w-50 flex flex-col gap-2 shadow-md cursor-pointer z-50'
                        initial={{y:-50, opacity:0}}
                        animate={{y:0, opacity:1 }}
                        exit={{y:-50, opacity:0 }}
                        transition={{ duration: 0.3 }}>
                            <Menuİtems icon={"dress"} text={"Elbise"}/>
                            <Menuİtems icon={"tshirt"} text={"Tişört"}/>
                            <Menuİtems icon={"shirt"} text={"Gömlek"}/>
                            <Menuİtems icon={"trousers"} text={"Kot Pantalon"}/>
                            <Menuİtems icon={"denim-jacket"} text={"Kot Ceket"}/>
                            <Menuİtems icon={"jeans"} text={"Pantalon"}/>
                            <Menuİtems icon={"cardigan"} text={"Mont"}/>
                            <Menuİtems icon={"leather-jacket"} text={"Ceket"}/>
                            <Menuİtems icon={"skirt"} text={"Etek"}/>
                            <Menuİtems icon={"jumper"} text={"Kazak"}/>
                            <Menuİtems icon={"hijab"} text={"Tesettür"}/>
                            <Menuİtems icon={"coat2"} text={"Kaban"}/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <a href=''>Anasayfa</a>
            <a href=''>Hakkımızda</a>
            <a href=''>Bloglar</a>
            <a href=''>İletişim</a>
        </div>
    </div>
  )
}

export default DesktopMenu