import React from 'react'

const Loading = ({turnOff}) => {
  return (
    <>
        <div className={`LoaderDiv ${turnOff? 'hidden' : ''} z-10 fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-[#0000007a]`}>
            <div class="spinner">
                <div></div>   
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    
            </div>
        </div>
    </>
  )
}

export default Loading