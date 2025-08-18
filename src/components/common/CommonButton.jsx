import React from 'react'
import { Link } from 'react-router'

const CommonButton = ({text , py , px}) => {
  return (
    <>
        <Link to={'/'} class={`relative flex items-center justify-center py-[${py}px] px-[${px}px]  overflow-hidden text-white bg-brand group rounded-md w-fit`}>
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-BlueText rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="relative font-josefin text-[16px]">{text}</span>
        </Link>
    </>
  )
}

export default CommonButton