import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

const TopBar = () => {
    const [areLanguagesOpen, setareLanguagesOpen] = useState(false);
    const [areMoneyOpen, setAreMoneyOpen] = useState(false);
    const [selectedMoney, setSelectedMoney] = useState("TRY");
    const [selectedLanguage, setSelectedLanguage] = useState("Turkce");
    const languageRef = useRef(null);
    const moneyRef = useRef(null);
    const languageChoose = (language) =>{
        localStorage.setItem("SeçilenDil",language);
        setSelectedLanguage(language);
    }
    const MoneyChoose = (money) =>{
        localStorage.setItem("SeçilenPara",money);
        setSelectedMoney(money);
    }
    useEffect(() => {
        const spaceClick = (event) =>{
            if(languageRef.current &&
            !languageRef.current.contains(event.target) &&
            moneyRef.current &&
            !moneyRef.current.contains(event.target)){
                setAreMoneyOpen(false);
                setareLanguagesOpen(false);
            }
        }
        document.addEventListener('mousedown',spaceClick)
    }, [])
    
    const languageShow = () =>{
        if(moneyShow){
            setAreMoneyOpen(false);
            setareLanguagesOpen (!areLanguagesOpen);
        }
    }
    const moneyShow = () =>{
        if(languageShow){
            setareLanguagesOpen(false); 
            setAreMoneyOpen (!areMoneyOpen);
        }
    }
  return (
    <div className='flex justify-center md:justify-between items-center shadow px-6'>
        <div className='md:flex hidden gap-10'>
            <a href=''>Hesap</a>
            <a href=''>Sipariş Takip</a>
            <a href=''>Destek</a>
        </div>

        <div className='flex justify-center items-center gap-5 text-sm'>
            <div
            ref={languageRef}
            onClick={languageShow} 
            className='flex justify-center items-center gap-1 cursor-pointer relative p-2.5 select-none'>
                <img src={`/img/${selectedLanguage}-icon.png`} className='size-5'></img>
                {selectedLanguage}
                <img src='/img/arrow-down.png' className='size-3'></img>
                <AnimatePresence>
                {areLanguagesOpen && (
                        <motion.div 
                        initial={{ opacity: 0, y:-10}}
                        animate={{ opacity: 1, y:0}}
                        exit={{opacity:0, y:-10}}
                        className='absolute top-full left-0 flex shadow w-30 flex-col'>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>languageChoose("Turkce")}>
                                <img src='/img/Turkce-icon.png'
                                className='size-5'></img>
                                Türkçe
                            </span>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>languageChoose("English")}>
                                <img src='/img/English-icon.png'
                                className='size-5'></img>
                                English
                            </span>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>languageChoose("Deutsch")}>
                                <img src='/img/Deutsch-icon.png'
                                className='size-5'></img>
                                Deutsch
                            </span>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>languageChoose("Francais")}>
                                <img src='/img/Francais-icon.png'
                                className='size-5'></img>
                                Francais
                            </span>
                        </motion.div>
                    )
                }
                </AnimatePresence>
            </div>

            <div
            ref={moneyRef}
            onClick={moneyShow}
            className='flex justify-center items-center gap-1 cursor-pointer relative py-2.5 select-none'>
                {selectedMoney}
                <img src='/img/arrow-down.png' className='size-3'></img>
                <AnimatePresence>
                {areMoneyOpen && (
                        <motion.div 
                        initial={{ opacity: 0, y:-10}}
                        animate={{ opacity: 1, y:0}}
                        exit={{opacity:0, y:-10}}
                        className='absolute top-full right-0 flex shadow w-20 flex-col'>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>MoneyChoose("TRY")}>
                                <img src='/img/Turkce-icon.png' 
                                className='size-5'></img>
                                TRY
                            </span>
                            <span className='flex justify-start items-center p-2 gap-2 w-full hover:bg-gray-200 transition-colors'
                            onClick={()=>MoneyChoose("USD")}>
                                <img src='/img/English-icon.png'
                                className='size-5'></img>
                                USD
                            </span>
                        </motion.div>
                    )
                }
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default TopBar