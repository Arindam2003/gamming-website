import 'boxicons/css/boxicons.min.css'

const Footer = () => {
    return (
        <>
        <footer className='flex items-center justify-between lg:mt-[15%] mt-[15%] py-9 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
            <img className='h-10' src="images/illu-text.png" alt="" />

            <img className='h-16 md:inline hidden' src="images/illu-logo.png" alt="" />

            <div className='flex gap-4'>

                    <a href="https://www.linkedin.com/in/arindam-dinda-01b652284/" className='md:text-3xl text-2xl hover:text-violet-600 duration-300' target="_blank"><i className='bx bxl-linkedin' ></i></a>

                    <a href="https://github.com/Arindam2003" className='md:text-3xl text-2xl hover:text-violet-600 duration-300' target="_blank"><i className='bx bxl-github' ></i></a>
            </div>
            
        </footer>
            <h2 className='font-bold text-sm text-white-200 text-center py-3 md:py-2 bg-gradient-to-r from-purple-400 to-indigo-800'>All Right Reserved @arindam</h2>
        </>
    )
}

export default Footer