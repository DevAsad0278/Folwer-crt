import React from 'react'
import { TbHandTwoFingers } from "react-icons/tb";
import PricingCards from './components/TiktokFollowers/cards-followers'
import Tiktokfollowerscontent from './components/TiktokFollowers/Tiktokfollowers-content';
import Accordianfollowers from './components/TiktokFollowers/accordian-followers'


const TiktokFollowers = () => {
  return (
    <>
    <div className=' hero-section-tiktok sm:mim-w-fit w-full'>
        <div className=''>
            <div className='text-white py-5 leading-8 text-center sm:text-base md:text-lg lg:text-xl  font-semibold'>Buy TikTok Followers
                <br />
            with PayPal, Stripe | Real and Cheap</div>

        </div>
    </div>
    <div className=''>
          <div className='text-black text-sm sm:text-base md:text-lgfont-medium py-6 flex items-center justify-center gap-2'>
          Swipe <TbHandTwoFingers className='text-amber-300' /> left/right to change packages.
          </div>
        </div>
        
        <PricingCards/>
        <Tiktokfollowerscontent/>
        <Accordianfollowers/>
    </>
  )
}

export default TiktokFollowers