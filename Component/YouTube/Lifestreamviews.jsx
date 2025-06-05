import React from 'react'
import { TbHandTwoFingers } from "react-icons/tb";
import Lifestreamcards from './components/Lifestream/Lifestreamcards';
import Livestreamcontent from './components/Lifestream/livestreamcontent';
import Accordianlivestream from './components/Lifestream/Accordianlivestream';

const Lifestreamviews = () => {
  return (
    <>
         <div className=' hero-section-tiktok sm:mim-w-fit w-full'>
                <div className=''>
                    <div className='text-white py-5 leading-8 text-center sm:text-base md:text-lg lg:text-xl  font-semibold'>Buy Youtube Lifestream Views
                        <br />
                    with PayPal, Stripe | Real and Cheap</div>
        
                </div>
            </div>
            <div className=''>
                  <div className='text-black text-sm sm:text-base md:text-lgfont-medium py-6 flex items-center justify-center gap-2'>
                  Swipe <TbHandTwoFingers className='text-amber-300' /> left/right to change packages.
                  </div>
                </div>
    <Lifestreamcards/>
    <Livestreamcontent/>
    <Accordianlivestream/>
        </>
  )
}

export default Lifestreamviews