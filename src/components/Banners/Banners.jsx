import React from 'react'
import BannerItems from './BannerItems'

const Banners = () => {
  return (
    <section className='display flex justify-center items-center flex-col min-lg:flex-row md:flex-row'>
        <BannerItems bg={`bg-cyan-200`} img={`banner1`} text={`Yeni Gelenler`} text2={`Yeni Tarzları Hemen Keşfet`} ></BannerItems>
        <BannerItems bg={`bg-purple-300`} img={`banner2`} text={`Yeni Gelenler`} text2={`Trendleri Şimdi Yakından Tanı`} ></BannerItems>
        <BannerItems bg={`bg-yellow-200`} img={`banner3.1`} text={`Yeni Gelenler`} text2={`Tarzını Kendin Belirle`} ></BannerItems>
    </section>
  )
}

export default Banners