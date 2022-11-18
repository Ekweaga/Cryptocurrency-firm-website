import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className='mt-[300px]   w-[90%] mx-auto'>
        <Image src="/Group.png" width={50} height={100}/>
        <div className='grid grid-cols-6 gap-[10px] mt-[20px]'>
            <div>
                <h2 className='font-bold'>Product</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                    <li>Individuals</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                    <li>Technology</li>
                    <li>Security</li>
                    <li>Integrations</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Company</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                    <li>Individuals</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                    <li>Technology</li>
                   
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Resources</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                    <li>Individuals</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                   
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Headquaters</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                   Crypto firm, Futa Akure Ondo state, Ondo
                </ul>
            </div>
            <div>
                <h2 className='font-bold'>Headquaters</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                   Crypto firm, Futa Akure Ondo state, Ondo
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Apps</h2>
                <ul className='flex flex-col gap-[20px] text-sm mt-[15px]'>
                  <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1.png" width={100} height={50}/>
                  <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1.png" width={100} height={50}/>
                </ul>
            </div>
        </div>

        <div className='mt-[40px] text-sm '>
            <hr/>
            <div className='flex justify-between mt-[20px]'>
                <p>Copyright @Chax.com</p>
                <ul className='flex gap-[20px]'>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                    <li>Copyright Abuse Policy</li>
                </ul>
            </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
