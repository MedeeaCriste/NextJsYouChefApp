import React from 'react'
import Image from 'next/image'

export default function Recipe({src, text}:any) {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Image className='w-[250px] h-[250px] rounded-lg' src={src} alt="imagine cu reteta" width={300} height={300}/>
        <p className='text-center w-[150px]'>{text}</p>
    </div>
  )
}
