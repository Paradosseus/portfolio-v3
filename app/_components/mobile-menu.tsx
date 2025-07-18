"use client"

import Link from "next/link";
import Button from "./ui/button";
import { useMenu } from "./context/MenuContext";
const MobileMenu = () => {
    const { isOpen, toggleMenu } = useMenu();

    if(!isOpen) return null;

    return (
     <div className='bg-[var(--background)] w-full h-[100vh] fixed inset-0 z-40 flex flex-col items-center justify-center'>
        <ul className='flex flex-col gap-8 font-semibold items-center'>
              <li><Link href="/" title='Go to Home Page' className='.nav-link-item text-4xl transition-all duration-300'>Home</Link></li>
              <li><Link href="/" title='Go to About Section' className='.nav-link-item text-4xl'>About</Link></li>
            <li><Link href="/" title='Go to Home Page' className='.nav-link-item text-4xl'>Services</Link></li>
              <li><Link href="/my-portfolio" title='Go to My Portfolio Page' className='.nav-link-item text-4xl'>My Portfolio</Link></li>
              <li><Link href="/contact" title='Go to Contact Page' className='.nav-link-item text-4xl'>Contact</Link></li>
              <li><a href=""><Button>Download CV</Button></a></li>
          </ul>
      </div>
    )
}

export default MobileMenu;