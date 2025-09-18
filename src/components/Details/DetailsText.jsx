import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const DetailsText = () => {
  return (
    <>
        <section id='Details-Text' className='mt-[120px]'>
            <div className="container">
                <div id="Details-Text-Row">
                    {/* ---------------Navigation----------------- */}
                    <div className='flex items-center gap-[85px] mb-[61px]'>
                        <button className='text-primary font-josefin font-semibold text-2xl hover:underline cursor-pointer'>Description</button>
                        <button className='text-primary font-josefin font-semibold text-2xl hover:underline cursor-pointer'>Additional Info</button>
                        <button className='text-primary font-josefin font-semibold text-2xl hover:underline cursor-pointer'>Reviews</button>
                        <button className='text-primary font-josefin font-semibold text-2xl hover:underline cursor-pointer'>Video</button>
                    </div>
                    {/* ---------------Texts----------------- */}
                    <h2 className='text-primary text-[22px] font-josefin font-semibold mb-3.5'>Varius tempor.</h2>
                    <p className='text-subText font-semibold leading-[29px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    {/* ---------------More Details----------------- */}
                    <h2 className='text-primary text-[22px] font-josefin font-semibold mt-9'>More details</h2>
                    <div className='flex items-center gap-3 group mt-[16px]'>
                        <FaArrowRight className='text-xl group-hover:text-primary duration-300' />
                        <p className='text-subText font-semibold leading-[29px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                    <div className='flex items-center gap-3 group mt-[16px]'>
                        <FaArrowRight className='text-xl group-hover:text-primary duration-300' />
                        <p className='text-subText font-semibold leading-[29px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                    <div className='flex items-center gap-3 group mt-[16px]'>
                        <FaArrowRight className='text-xl group-hover:text-primary duration-300' />
                        <p className='text-subText font-semibold leading-[29px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                    <div className='flex items-center gap-3 group mt-[16px]'>
                        <FaArrowRight className='text-xl group-hover:text-primary duration-300' />
                        <p className='text-subText font-semibold leading-[29px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DetailsText