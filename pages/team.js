import React from 'react'
import Image from 'next/image'

function Team() {

    const team = [
        {
                name:'Sarah Smith',
                note:'Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange',
                pos:"CEO",media:"/Frame 9.png",
                avatar:"/Rectangle 2050 (1).png"
        },
        {
            name:'Sarah Smith',
            note:'Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange',
            pos:"CEO",media:"/Frame 9.png",
            avatar:"/Rectangle 2050 (1).png"
        },
        {
            name:'Sarah Smith',
            note:'Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange',
            pos:"CEO",media:"/Frame 9.png",
            avatar:"/Rectangle 2050.png"
        }
    ]
  return (
    <>
      <div className='w-[500px] mt-[100px] ml-[130px]'>
        <h1 className='text-5xl mb-[20px]'>Meet our team of crypto experts</h1>
        <p> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange</p>
      </div>

      <div className='flex items-center justify-center -mt-[80px] relative z-1'>
<Image src="/Group 2283.png" width={1400} height={100}/>

</div>

<div className='flex items-center justify-center'>
    <div className='grid grid-cols-3 gap-[10px]'>
        {team.map((item)=>{
            return (
                <div className='w-[350px]'>
                    <Image src={item.avatar} width={300} height={100}/>
                    <div className='mt-[20px]'>
                        <h2 className='text-2xl'>{item.name}</h2>
                        <h3 className='text-sm mt-[20px]'>{item.pos}</h3>
                        <p className='text-sm mt-[20px]'>{item.note}</p>
                        <div className='mt-[25px]'>
                        <Image src={item.media} width={100} height={100}/>
                            </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>

<div className='relative mt-[100px]'>
<Image src="/Group 7.png" width={1400} height={100}/>
<div className='absolute top-[70px] left-[150px]'>
  <h2 className='font-bold text-[#FD7000] text-2xl mb-[15px]'>Our RoadMap</h2>
  <p className='w-[300px]'> speculating on Cryptocurrency price movements via a CFD trading </p>
</div>
</div>

<div className='flex items-center justify-center w-[80%] mx-auto mt-[100px]'>
<Image src="/Group 4.png" width={1400} height={100}/>
</div>

<div className='flex items-center justify-center mt-[150px]'>
    <div>
        <div>
            <h2 className='text-center'>Values & Principal</h2>
            <h1 className='text-[#FD7000] text-3xl mt-[15px] text-center mb-[15px]'>Values & Principal</h1>
            <p className="text-center w-[500px]"> Cryptocurrency trading is the act of speculating on Cryptocurrency price movements via a CFD trading account,buying and selling the underlying coins via exchange</p>

            <div className=' flex items-center gap-[10px] justify-center mt-[50px] '>
    <p>Join Us </p>
    <div><Image src="/arrow_right_alt.png" width={20} height={100}/></div>
  </div>
        </div>

    </div>
</div>

    </>
  )
}

export default Team
