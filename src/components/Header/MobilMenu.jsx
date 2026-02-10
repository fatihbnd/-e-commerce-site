import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import React from "react";
import Menuİtems from "./Menuİtems";
import ShoppingCartItems from "./ShoppingCartItems";

const MobilMenu = () => {
    const [isShoppingCartMenuOpen, setIsShoppingCartMenuOpen] = useState(false);
    const ShoppingCartMenuRef = useRef(null);
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
    const toggleShoppingCartMenu = () => {
        setIsShoppingCartMenuOpen(prev => !prev)
    }
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
    const [mobilMenu, setMobilMenu] = useState(false);
    const mobilMenuOpen = () =>{
        setMobilMenu(true);
    }
    const mobilMenuClose = () =>{
        setMobilMenu(false);
    }
    const [Category, setCategory] = useState(true);
    const [Menu, setMenu] = useState(false);
    const isCategoryOpen = () => {
        setCategory(true);
        setMenu(false);
    }
    const isMenuOpen = () =>{
        setCategory(false);
        setMenu(true);
    }
  return (
    <div className="flex items-center justify-between p-3 pr-5 decoration-[var(--color-text)]">
        <div onClick={mobilMenuOpen}>
            <img src='/img/menu.png' className="size-9"></img>
        </div>
        <AnimatePresence>
            {mobilMenu &&(
                <React.Fragment>
                    <motion.div className="absolute left-0 top-0 bg-white w-60 h-full z-50 flex flex-col"
                    initial={{ x: "-100%",opacity:0, }}
                    animate={{ x: 0,opacity:1, }}
                    exit={{ x: "-100%",opacity:0 }}
                    transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between p-3">
                            <div className="flex gap-4">
                                <div>
                                    <img src="/img/profile.png" className="size-7"></img>
                                </div>
                                <div className="relative">
                                    <img src="/img/hearth.png" className="size-7"></img>
                                    <div className="absolute bg-[var(--color-primary)] rounded-full w-5 h-5 flex items-center justify-center -top-2 -right-3">1</div>
                                </div>
                            </div>

                            <div onClick={mobilMenuClose}>
                                <img src="/img/close.png" className="size-7"></img>
                            </div>
                        </div>

                        <div className=" flex items-center justify-center p-4">
                            <input type="text"
                            placeholder="Bi şeyler ara"
                            className="border border-gray-300 py-1 px-2 pr-11 w-full"></input>
                            
                            <button className="bg-[var(--color-primary)] w-10 absolute h-8 right-4">Ara</button>
                        </div>

                        <div className="flex items-center px-4 gap-5">
                            <span className={`cursor-pointer ${Category ? "text-[var(--color-text)]" : "text-gray-300"} select-none`} 
                            onClick={isCategoryOpen}>Katogori</span>
                            <span>|</span>
                            <span className={`cursor-pointer ${Menu ? "text-[var(--color-text)]" : "text-gray-300"} select-none`} 
                            onClick={isMenuOpen}>Menü</span>
                        </div>

                        {Category && 
                            <motion.div 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.2}} 
                            className="px-4 overflow-y-auto flex-1 flex-col mt-4">
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
                        }
                        {Menu && 
                            <motion.div 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.2}}
                            className="px-4 overflow-y-auto flex-1 flex-col mt-4">
                                <Menuİtems icon={"home"} text={"Ana Sayfa"}/>
                                <Menuİtems icon={"about"} text={"Hakkımızda"}/>
                                <Menuİtems icon={"blogs"} text={"Bloglar"}/>
                                <Menuİtems icon={"contact"} text={"İletişim"}/> 
                                 <Menuİtems icon={"location"} text={"Sipariş Takip"}/>            
                            </motion.div>}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={mobilMenuClose}
                    />
                </React.Fragment>
            )}
        </AnimatePresence>
        <div>
            <img src="/img/logo.png"></img>
        </div>

        <div className="relative" ref={ShoppingCartMenuRef}>
            <img src="/img/shopping-bag.png" className="size-8" onClick={toggleShoppingCartMenu}></img>
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
                            price={item.price}/>))}
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
  )
}

export default MobilMenu