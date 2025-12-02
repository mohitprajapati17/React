import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function ContentSection() {
  return (
    <div className='w-1/3  h-full flex flex-col justify-between'>


        <h3 className="text-6xl leading-tight px-15 py-10 font-bold">
            Prospective <br/> Customer <br/> segmentation
            <p className="text-base mt-4 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum veritatis dignissimos harum voluptatum sit velit dicta ad ut culpa. Quo at totam inventore neque vitae nam, ipsam voluptatem ad similique.
            </p>
            
        </h3>

        


            <FiArrowUpRight className='size-23 p-2 text-black' />
        
    </div>
  )
}

export default ContentSection