import React from 'react';
import Heading from "@/components/html_tags/Heading";
import RichText from '../../../utils/RichText';
import Price from './Price';
import FacilitiesTable from './FacilitiesTable';

const Content = ({ story }) => {
  return ( 
      <div className='flex flex-col gap-y-6 sm:gap-y-8 lg:max-w-xl'>

          {story.name &&
            <Heading size="h1" underlineAnimation={true} className="!mb-0 !pb-0 xl:!text-8xl">
                {story.name}
            </Heading>
          }

          <Price story={story} />

          {story.content.description &&
            <div className='font-roboto text-lg sm:text-xl leading-6 sm:leading-7 [&_b]:text-xl [&_b]:sm:text-2xl [&_b]:!leading-6 [&_b]:sm:!leading-7 tracking-[-0.5px]'>
              <RichText content={story.content.description} />  
            </div>
          }       

          <FacilitiesTable story={story} />

      </div>
  );
};

export default Content;
