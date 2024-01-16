import React from 'react'
import pic1 from '/src/assets/images/image-product-desktop.jpg'
import mobilepic from '/src/assets/images/image-product-mobile.jpg'
function Box() {
  return (
    <div className='flex items-center justify-center p-5  h-screen'>
        <div className='max-w-[500px] sm:max-w-[700px] rounded-xl sm:flex sm:justify-between relative max-h-[750px] sm:max-h-[520px] mx-auto bg-white'>
           <img src={pic1} className='max-w-[350px] rounded-xl rounded-e-none hidden sm:flex' />
           <img src={mobilepic} className=' bg-cover bg-center bg-no-repeat h-[350px] flex sm:hidden rounded-xl rounded-b-none'/>
           <div className='flex max-h-[500px] flex-col p-[30px] sm:p-[50px]'>
            <p className='font-medium tracking-[.55em]  text-gray-500'>PERFUME</p>
            <h1 className='font-bold text-4xl py-[20px] sm:py-[20px]'>Gabrielle Essence Eau De Parfum</h1>
            <p className='text-gray-400 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque eius, quisquam atque magnam earum,  iusto odio?</p>
            <div className='flex py-[10px] sm:mt-[0px] mt-[10px] sm:py-[20px] items-center'>
                <i className=' font-bold text-4xl text-green-700'>$149.99</i>
                <span className='ml-[25px] text-gray-400 line-through'>$169.99</span>
            </div>
          <div className='w-full flex py-3 sm:py-5 justify-start items-center'>
          <button className=' bg-green-700 rounded-xl flex justify-center items-center  w-full h-[50px]'><svg className='mr-[10px]' width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg><p className='text-white font-bold'>Add to Cart</p></button>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Box