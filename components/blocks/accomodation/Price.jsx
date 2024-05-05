import React from 'react';
import Heading from "@/components/html_tags/Heading";

const Price = ({ story }) => {
  return ( 
        <div className='flex flex-row gap-6 pt-0'>
            <Heading size="h3" className="text-[#b37576] !mb-0">
                £{story.content.price} <span className='text-lg sm:text-xl text-[#333]'>/ per person</span>
            </Heading>
            <Heading size="h3" className="text-[#b37576] !mb-0">
                {story.content.capacity} <span className='text-lg sm:text-xl text-[#333]'>/ People per {story.name}</span>
            </Heading>
        </div>
  );
};

export default Price;
