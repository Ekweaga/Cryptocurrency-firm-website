import React from 'react'
import Image from "next/image"
function Navbar() {
  return (
   <>
   <nav className='text-white flex justify-between h-[60px] p-[30px]'>
    <div className='ml-[80px]'>
        <Image src="/Group.png" width={50} height={100}/>
    </div>

    <ul className='flex gap-[30px] mr-[580px] '>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Team</li>
    </ul>
   </nav>
   
   </>
  )
}

export default Navbar
