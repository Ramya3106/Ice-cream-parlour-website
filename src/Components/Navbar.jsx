import React,{useRef}from 'react'

const Navbar = () => {

    const menu =  useRef();

    const menuhandler = () =>{
        menu.current.classList.toggle('show-menu');

    }

  return (
    <div className='h-[80px] flex justify-between items-center px-[12%] py-[0] relative'>
        <div className='flex items-center jusyify-center'>
            <span className='text-2xl text-red-600 font-medium cursor-pointer'>ICEPARLOUR</span>
        </div>
        <div ref={menu} className='md:static absolute top-[100%] left-[-100%] md:left font-medium gap-[20px] w-full transition-all duration-600 bg-white md:bg-[#ffded1]'>
            <ul className='w-full flex flex-col md:flex-row gap-[15px] justify-center'>
                <li className='border-b pb-5 pt-5 px-20 md:border-none md:p-0'><a href="#" className='Navbar-link'>Home</a></li>
                <li><a href="#" className='Navbar-link'>Category</a></li>
                <li><a href="#"className='Navbar-link'>Popular</a></li>
                <li><a href="#" className='Navbar-link'>Testimonials</a></li>
                <li><a href="#" className='Navbar-link'>Contact</a></li>
            </ul>
        </div>
        <div className='flex gap-[20px] items-center justify-center'>
            <button className='btn'>Shop Now
                <i className='ri-arrow-right-line'></i>
            </button>
            <i className='ri-menu-3-line btn bar' onClick={menuhandler}></i>
        </div>
    </div>
  )
}

export default Navbar