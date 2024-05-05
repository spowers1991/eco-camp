import React from 'react';
import RichText from '../../../utils/RichText';

const Testimonial = ({ story }) => {
  return ( 
    story.content.testimonial &&
      <div className={`bg-white p-6 sm:px-6 sm:py-12 mt-8 flex-1`} >
        <blockquote className='font-bebas-neue text-4xl sm:text-[60px] text-[#999] leading-1 sm:leading-[3.25rem]'>
            <div className='text-7xl sm:text-[100px] text-[#333]'>
              {String.fromCharCode(8220)}
            </div>
            <div className='-mt-5 sm:-mt-10 [&_b]:text-[#b37576] [&_b]:font-normal'>
              <RichText content={story.content.testimonial} />
            </div>
        </blockquote>    
      </div>
  );
};

export default Testimonial;
