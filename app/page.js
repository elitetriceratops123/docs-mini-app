import Background from '@/Components/Background'
import Foreground from '@/Components/Foreground'
import React from 'react'


const page = () => {
  return (
    <>
      <div className=' relative  w-full h-screen bg-zinc-800 '>
        <Background/>
        <Foreground />
      </div>
    </>
  )
}

export default page
