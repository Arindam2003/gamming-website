import React from 'react'
import 'boxicons/css/boxicons.min.css'


const Header = () => {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobileNav");

        mobileMenu.classList.toggle("max-h-0");
        mobileMenu.classList.toggle("opacity-0");
        mobileMenu.classList.toggle("pointer-events-none");
        mobileMenu.classList.toggle("max-h-screen");
        mobileMenu.classList.toggle("opacity-100");

    }
    return (
        <header className='py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black'>
            {/* Left Section */}
            <div className='flex lg:gap-8 gap-4 items-center'>
                <img className='w-12 md:w-16' src="public/images/logo.png" alt="logo" />
                <div className='hidden md:flex gap-5 items-center'>
                    <button className='h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
                        Play Now
                    </button>

                    <button className='h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
                        Play Now
                    </button>
                </div>
            </div>

            {/* Right Section */}

            <nav className='hidden md:flex lg:gap-8 gap-4 items-center'>
                <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                    <i className='bx bx-user-circle'></i> Avator
                </a>

                <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                    <i className='bx bx-diamond'></i> Arena
                </a>

                <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                    <i className='bx bxs-chevrons-up'></i> Beyond
                </a>
                <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                    <i className='bx bx-store-alt'></i> Shop
                </a>
            </nav>

            {/* Mobile menu button*/}

            <button onClick={toggleMobileMenu} className='text-3xl p-2 md:hidden cursor-pointer'>
                <i className='bx bx-menu'></i>
            </button>

            {/* mobile - menu */}

            <div id='mobileNav' className='max-h-0 overflow-hidden transition-all duration-500 ease-in-out fixed top-16 right-0 left-0 bg-black p-5 md:hidden opacity-0 pointer-events-none'>
                <nav className='flex flex-col gap-4 items-center'>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                        <i className='bx bx-user-circle'></i> Avator
                    </a>

                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                        <i className='bx bx-diamond'></i> Arena
                    </a>

                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                        <i className='bx bxs-chevrons-up'></i> Beyond
                    </a>
                    <a href="#" className='relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap'>
                        <i className='bx bx-store-alt'></i> Shop
                    </a>
                </nav>

                <div className='flex flex-col gap-3 w-full mt-4'>
                    <button className='bg-purple-700 py-2 rounded hover:opacity-70'>
                        Play Now
                    </button>
                    <button className='bg-gray-500 py-2 rounded hover:opacity-70'>
                        NFT Store
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header