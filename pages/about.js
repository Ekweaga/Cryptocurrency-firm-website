import React from 'react'
import Image from 'next/image'

function About() {
  return (
  <>
  <div className='mt-[140px] z-5'>
  <div className='flex justify-around'>
    <div className='relative '>
    <Image src="/world 1.png" width={500} height={300}/>
    <div className='absolute top-[120px] left-0'>
      <h1 className='text-6xl mb-[30px]'>Low Risks. <br/>Hight yields</h1>
      <p>Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange</p>
      <div className='mt-[40px]'><button className='bg-[#FD7000] text-white p-2 rounded-full w-[150px]'>Get Started</button></div>
    </div>

    </div>
  <Image src="/Rectangle.png" width={500} height={300}/>
  </div>

</div>

<div className='flex items-center justify-center -mt-[120px] relative z-1'>
<Image src="/Group 2283.png" width={1400} height={100}/>

</div>


<div className='flex justify-around  mt-[100px]'>
    <div className='w-[500px]'>
        <h1 className='text-5xl mb-[20px]'>Expand your <br/>business with the <br/>Best Solutions</h1>
        <p> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange</p>
        <div className=' flex items-center gap-[10px] mt-[15px]'>
    <p>Learn more </p>
    <div><Image src="/arrow_right_alt.png" width={20} height={100}/></div>
  </div>
    </div>

<Image src="/Crypto.png" width={350} height={100}/>
</div>

<div className='flex items-center justify-center -mt-[100px] relative z-1'>
<Image src="/Group 7.png" width={1400} height={100}/>

</div>
  </>
  )
}

export default About