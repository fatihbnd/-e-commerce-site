import React from 'react'
import ProductItems from './ProductItems'

const TrendProduct = () => {
  return (
    <section className='container mx-auto mt-10'>
        <div className='p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-lg'>Trend Urunler</h3>
                <span className='flex items-center text-sm'>
                    Daha Fazla
                    <img src='/img/arrow-right.png' className='size-5'></img>
                </span>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 items-center justify-center'>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
                <ProductItems img={`product1`} head={`Deri Ceket`} basePrice={`1500TL`} salePrice={`999Tl`}></ProductItems>
            </div>
        </div>
    </section>
  )
}

export default TrendProduct