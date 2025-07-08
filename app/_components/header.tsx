import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <nav className='max-w-7xl mx-auto py-4 flex justify-between items-center'>
        <div className='logo'>
            <Link href="/" title='Go to Home Page'>
                <Image priority src="/logo.svg" alt="logo" width={56} height={56} />
            </Link>
        </div>
        <ul className='flex gap-12 font-semibold'>
            <li><Link href="/" title='Go to Home Page'>Home</Link></li>
            <li><Link href="/my-portfolio" title='Go to My Portfolio Page'>My Portfolio</Link></li>
            <li><Link href="/contact" title='Go to Contact Page'>Contact</Link></li>
            <li><a className="btn-primary" href="">Download CV</a></li>
        </ul>
    </nav>
  )
}


export default Header;