import React from 'react'
import { TbHandTwoFingers } from "react-icons/tb";
import Videolikescards from './components/Videolikes/Videolikescards';
import Videolikescontent from './components/Videolikes/Videolikescontent';
import Accordianvideolikes from './components/Videolikes/Accordianvideolikes';

const Videolikes = () => {
  return (
    <>
         <div className=' hero-section-tiktok sm:mim-w-fit w-full'>
                <div className=''>
                    <div className='text-white py-5 leading-8 text-center sm:text-base md:text-lg lg:text-xl  font-semibold'>Buy Youtube Likes
                        <br />
                    with PayPal, Stripe | Real and Cheap</div>
        
                </div>
            </div>
            <div className=''>
                  <div className='text-black text-sm sm:text-base md:text-lgfont-medium py-6 flex items-center justify-center gap-2'>
                  Swipe <TbHandTwoFingers className='text-amber-300' /> left/right to change packages.
                  </div>
                </div>
        <Videolikescards/>
        <Videolikescontent/>
        <Accordianvideolikes/>
        </>
  )
}

export default Videolikes