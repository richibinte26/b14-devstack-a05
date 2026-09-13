import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white shadow-sm'>
            <div className="mx-auto flex w-full justify-between items-center px-6 py-4 ">
                <button className='lg:hidden'>
                    <GiHamburgerMenu />
                </button>
                <img src={logo} alt="Logo" className='w-24 sm:w-32 cursor-pointer'/>
                     
                <div className="hidden lg:flex gap-6 items-center text-slate-600">
                    <a className='text-pink-600' href="#">Home</a>
                    <a className='hover:text-pink-600' href="#">Technologies</a>
                    <a className='hover:text-pink-600' href="#">Projects</a>
                    <a className='hover:text-pink-600' href="#">About</a>
                    <a className='hover:text-pink-600' href="#">Contact</a>
                </div>
                <div className='flex gap-2 items-center'>
                  <button className=' font-medium text-slate-800 cursor-pointer'>Sign In</button>
                  <button className='rounded-full bg-pink-600 px-3 sm:px-5 py-2.5 text-sm font-semibold text-white hover:bg-pink-500 cursor-pointer'>Sign Up</button>
                
                </div>
            </div>
        </nav>
            
    );
};

export default Navbar;