import React from 'react'
import { AiOutlineCheckSquare } from "react-icons/ai";

const Accordianviews = () => {
  return (
    <div className='w-[90%] mx-auto pb-20'>
        <div className='py-7'>
    <h1 className='text-center font-bold text-base md:text-lg sm:text-sm  bg-blue-950 text-white sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-5 rounded-4xl mx-auto'>Frequently Asked Questions</h1>
    </div>
        <div className=' flex justify-center'>
    <div className="join join-vertical">
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">Will purchased views helpe my videos's organic views?</div>
      <div className="collapse-content text-sm">Yes, purchasing views can significantly contribute to your video’s <br/> organic growth on YouTube. When your video initially receives a boost in <br/> views, it signals to YouTube’s algorithm that your content is relevant and<br/> engaging. As a result, the algorithm is more likely to recommend your <br/>video to a wider audience. </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">How quickly will I see result after purchasing views?</div>
      <div className="collapse-content text-sm">Results may vary, but you can typically see an increase in views shortly <br/> after the delivery process begins. For premium views, we gradually <br/> deliver your order to avoid detection of any suspicious activity, but it will <br/> somehow be completed within the expected time mentioned on the <br/> package.</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">Do you offer a guaranteeon the views?</div>
      <div className="collapse-content text-sm">Yes, we stand by the quality of our services and offer a complete refund  <br/>if you are not satisfied. Furthermore, in case you observe any decline <br/>that may rarely happen, contact our support team, and we will offer a <br/> free refill. </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">How much does 100k on Youtube pays?</div>
      <div className="collapse-content text-sm">YouTube pays creators $0.01–$0.03 per view, which is $10–30 per 1000 <br/> views. However, profits are variable depending on your niche, target<br/> audience, ads, content, etc. The revenue can be calculated in two ways:
      <div>
        <p className="sm:text-sm lg:text-lg font-bold flex items-center gap-2 text-lg mb-4 text-gray-900">
            <AiOutlineCheckSquare size={20} />
            Ad revenue:</p>
            <div className='text-left text-lg md:text-lg sm:text-sm'>YouTube revenue per 100K views  — $1,000 - $3,000</div>
      </div>
      <div>
        <p className="sm:text-sm lg:text-lg font-bold flex items-center gap-2 text-lg mb-4 text-gray-900">
            <AiOutlineCheckSquare size={20} />
            Video Views:</p>
            <div className='text-left text-lg md:text-lg sm:text-sm'>YouTube revenue per 100K views — $500 - $700</div>
      </div>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">How many seconds do you need to watch a video to count as a view?</div>
      <div className="collapse-content text-sm">A user on YouTube has to watch a video for at least 30 seconds to count <br/> it as a view. Here are the two conditions that should be met for a <br/>YouTube video count;
      <br/> <br/>
      A user should initiate the video play intentionally, Total watch time must<br/> be 30 seconds at least.
      <br/><br/>
      In case you watch a video while skipping some portions, then the total<br/> watch time exceeding 30 seconds will be counted as a view as well. </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-400 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">Does rewatching a video count as a view?</div>
      <div className="collapse-content text-sm">Yes, YouTube will count a rewatch as a view but only if <br/> it looks natural. If you have watched a video and you liked it, you may go back to the start <br/>and watch it again.
        <br/><br/>
        This is something that the platform doesn’t consider shady and counts<br/> it as a view. 
        <br/><br/>
        But if you repeatedly refresh the page and watch the same video many<br/> times, YouTube will consider this a spammy act, and it will not consider<br/> these views. </div>
    </div>
    
  </div>
  </div>
    </div>
  )
}

export default Accordianviews