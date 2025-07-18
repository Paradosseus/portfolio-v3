'use client'

import Link from 'next/link';
import Image from 'next/image';
import Button from './button';
import { useMenu } from "../context/MenuContext";
import MobileMenu from '../mobile-menu';


const Header = () => {


  const { isOpen, toggleMenu } = useMenu();

  console.log(isOpen)
  return (
    <header className='border-b border-[rgba(255,255,255,.1)] sticky top-0 bg-[rgba(0,0,0,.5] backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto lg:py-4 py-3 lg:px-0 px-5 flex justify-between items-center'>
        <div className='logo'>
            <Link href="/" title='Go to Home Page'>
                <Image priority src="/logo.svg" alt="logo" width={56} height={56} />
            </Link>
        </div>
        <ul className='lg:flex gap-12 font-semibold items-center hidden'>
            <li><Link href="/" title='Go to Home Page' className='nav-link-item'>Home</Link></li>
            <li><Link href="/my-portfolio" title='Go to My Portfolio Page' className='nav-link-item'>My Portfolio</Link></li>
            <li><Link href="/contact" title='Go to Contact Page' className='nav-link-item'>Contact</Link></li>
            <li><a href=""><Button>Download CV</Button></a></li>
        </ul>

        <div className='lg:hidden block relative z-50'>
          <button onClick={toggleMenu}>
            <div className='flex flex-col gap-[5px] justify-center items-center w-6 h-6'>
            <span
          className={`block h-[3px] w-full bg-white transform transition duration-300 ease-in-out rounded-2xl
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block h-[3px] w-full bg-white transform transition duration-300 ease-in-out rounded-2xl
            ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-[3px] w-full bg-white transform transition duration-300 ease-in-out rounded-2xl
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />

            </div>
          </button>
        </div>
        <MobileMenu/>
      </nav>
    </header>
  )
}


export default Header;