import React,{useState} from 'react'
import Image from "next/image"
import Link from 'next/link'

function Navbar() {

  const [open,setOpen] = useState(false)
  return (
   <>
   <nav className='text-white flex justify-between h-[60px] p-[30px]'>
    <div className='md:ml-[80px] cursor-pointer'>
        <Image src="/Group.png" width={50} height={100}/>
    </div>

    <ul className='md:flex gap-[30px] mr-[580px] hidden'>
        <li className='cursor-pointer'><Link href="/">Home</Link></li>
        <li className='cursor-pointer'><Link href="/about">About Us</Link></li>
        <li className='cursor-pointer'><Link href="/team">Our Team</Link></li>
    </ul>

    <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-white" : ""
          } text-3xl md:hidden `}
        >
          <img src={open ? "icon-close.svg" :"icon-hamburger.svg"} style={{width:'40px'}}/>
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
        
                <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
                
                <li  onClick={() => setOpen(!open)}><Link href="/about">About Us</Link></li>
               
                <li  onClick={() => setOpen(!open)}><Link href="/team">Our Team</Link></li>
          </ul>
        </div>
   </nav>
   
   </>
  )
}

export default Navbar
