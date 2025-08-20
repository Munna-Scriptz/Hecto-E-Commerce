import React from 'react'

const CommonHead = ({text}) => {
  return (
    <div>
        <h2 className='lg:text-[42px] text-[32px] text-primary text-center font-abyss'>{text}</h2>
    </div>
  )
}

export default CommonHead