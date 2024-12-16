import React from 'react'


const Background = () => {
  return (
    <>
      <div className=' fixed z-[0] h-screen w-full '>
        <div className='absolute top-[5%] w-full py-10 flex justify-center items-center text-zinc-600 text-xl font-semibold'>Documents</div>
        <p className=' absolute top-1/2 left-1/2 -translate-x-[50%] font-title -translate-y-[50%] text-[15vw] leading-none tracking-tighter text-zinc-900 '>Docs.</p>
      </div>
    </>
  )
}

export default Background
