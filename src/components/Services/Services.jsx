import React from 'react'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <div className='bg-gray-500 w-full h-auto p-5 grid gap-4 flex-col bg-[url("/img/service-bg.png")] items-center bg-no-repeat bg-center bg-cover md:grid-cols-2 xl:grid-cols-4'>
        <ServicesItem img={`shipping`} head={'Ücretsiz Kargo'} text={'500TL Ye kadar olan şiparişlerde geçerli'}></ServicesItem>
        <ServicesItem img={`return`} head={'Ücretsiz İade'} text={'30 Gün içersinde koşulsun iade garantisi'}></ServicesItem>
        <ServicesItem img={`secure`} head={'Güvenli Ödeme'} text={'%100 Güvenli ve online ödeme kolaylığı'}></ServicesItem>
        <ServicesItem img={`best`} head={'En İyi Kalite'} text={'Tüm ürünlerde orjinal ürün garantisi'}></ServicesItem>
    </div>
  )
}

export default Services