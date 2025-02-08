import React from 'react'
import logo from '/src/assets/fh-favicon.jpg'
const Navbar = () => {
  return (
    <nav className='w-full bg-white fixed z-20'>
      <div className='flex justify-between items-center  px-6 py-4 shadow-md'>
        <div className='flex items-center gap-2 '>
          <img className='h-12  ' src={logo} alt="logo" />
          <h1 className='text-2xl font-bold text-[#1b7ec5]'>FlowHive</h1>
        </div>
        <div className='flex gap-2 mr-28'>
          <a href="#" className='hover:border rounded-md  hover:bg-gray-100 hover:text-[#1b7ec5] border-none py-2 px-2 '><span>How it works</span></a>
          <a href="#" className='hover:border rounded-md   hover:bg-gray-100 hover:text-[#1b7ec5] border-none py-2 px-5'><span>Partner</span></a>
          <a href="#" className='hover:border rounded-md  hover:bg-gray-100 hover:text-[#1b7ec5] border-none py-2 px-4'><span>Partnership</span></a>
          <a href="#" className='hover:border rounded-md  hover:bg-gray-100 hover:text-[#1b7ec5] border-none py-2 px-5'><span>FAQ</span></a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar