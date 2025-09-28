import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import contactImg from '../assets/images/contactImg.png'
const Contact = () => {
  return (
    <>
        <section id='Contact-Page'>
            <BreadCrumb pageName={'Contact US'} to={'contact'} />
            <div className="container">
                <div id="Contact-Page-Row">
                    {/* ----------------------Info about us   */}
                    <article className='flex items-center justify-between'>
                        <div className='w-[550px]'>
                            <h2 className='text-BlueText font-josefin font-bold text-[36px]'>Information About us</h2>
                            <p className='mt-3 text-subText leading-[25px] font-lato font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                            <div className='mt-[50px] flex items-center gap-[14px]'>
                                <span className='w-[25px] h-[25px] rounded-full inline-block bg-[#5625DF]'></span>
                                <span className='w-[25px] h-[25px] rounded-full inline-block bg-brand'></span>
                                <span className='w-[25px] h-[25px] rounded-full inline-block bg-[#37DAF3]'></span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-BlueText font-josefin font-bold text-[36px]'>Contact Way</h2>
                            <div className='mt-6 flex items-center gap-[35px] flex-wrap'>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[45px] h-[45px] rounded-full inline-block bg-[#5625DF]'></span>
                                    <div>
                                        <p className='text-subText font-lato'>Tel: 877-67-88-99</p>
                                        <p className='text-subText font-lato'>E-Mail: shop@store.com mt-1</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[45px] h-[45px] rounded-full inline-block bg-brand'></span>
                                    <div>
                                        <p className='text-subText font-lato'>Support Forum</p>
                                        <p className='text-subText font-lato'>For over 24hr</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 flex items-center gap-[65px] flex-wrap'>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[45px] h-[45px] rounded-full inline-block bg-[#FFB265]'></span>
                                    <div>
                                        <p className='text-subText font-lato'>20 Margaret st, London</p>
                                        <p className='text-subText font-lato'>Great britain, 3NM98-LK</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='w-[45px] h-[45px] rounded-full inline-block bg-[#1BE982]'></span>
                                    <div>
                                        <p className='text-subText font-lato'>Free standard shipping</p>
                                        <p className='text-subText font-lato'>on all orders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* ----------------------Contact Inputs   */}
                    <section className='mt-[122px] flex justify-between'>
                        <form className='w-[600px]'>
                            <h2 className='text-BlueText font-josefin font-bold text-[36px]'>Get In Touch</h2>
                            <p className='mt-[20px] font-lato text-subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                            {/* ------------------Inputs  */}
                            <div className='mt-[46px]'>
                                <div className='flex items-center justify-between'>
                                    <input className='w-[255px] h-[45px] border-1 border-[#A4B6C8B2] rounded-[4px] pl-4 outline-none' placeholder='Your Name*' type="text"/>
                                    <input className='w-[255px] h-[45px] border-1 border-[#A4B6C8B2] rounded-[4px] pl-4 outline-none' placeholder='Your E-mail' type="email"/>
                                </div>
                            </div>
                            <div className='mt-[46px]'>
                                <div className='flex items-center justify-between'>
                                    <input className='w-full h-[45px] border-1 border-[#A4B6C8B2] rounded-[4px] pl-4 outline-none' placeholder='Subject*' type="text"/>
                                </div>
                            </div>
                            <div className='mt-[46px]'>
                                <div className='flex items-center justify-between'>
                                    <textarea className='w-full border-1 border-[#A4B6C8B2] rounded-[4px] pl-4 pt-4 outline-none' placeholder='Subject*' rows={8} type="text"/>
                                </div>
                            </div>
                            <div className='mt-[40px]'>
                                <button className='bg-brand py-[9px] w-[164px] cursor-pointer hover:bg-BlueText hover:text-brand duration-300 text-center rounded-[4px] text-white font-josefin' type='submit'>Submit Mail</button>
                            </div>
                        </form>
                        <div>
                            <img src={contactImg} alt="Contact illustration" />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact