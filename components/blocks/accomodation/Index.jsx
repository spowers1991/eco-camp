import React from 'react';
import { storyblokEditable } from "@storyblok/react";;
import FeaturedImage from './FeaturedImage';
import Description from './Description'
import Testimonial from './Testimonial';
import CallsToAction from './CallsToAction';
import RelatedListings from './RelatedListings';
import BackButton from '@/components/misc//BackButton'

const Index = ({ story, blok, globalSettings }) => {
  return ( 
      <div className={`lg:container pt-0 lg:px-6 xl:px-16 3xl:px-0 mx-auto my-12 lg:my-16 duration-500`} {...storyblokEditable(blok)}>

        <div className='pb-3'>
          <BackButton content='Go Back' />
        </div>
        
        <div className='flex flex-col lg:flex-row !gap-x-[60px] xl:gap-x-12 gap-y-10'> 

          <div className='flex flex-col w-full lg:w-1/2'>

            <FeaturedImage story={story} />   

            <CallsToAction story={story} globalSettings={globalSettings}/>

            <Testimonial story={story}/> 

          </div>

          <div className="lg:container px-6 lg:px-0 w-full lg:w-1/2">

            <Description story={story} />

          </div>

        </div>

        <div className="lg:container px-6 lg:px-0 w-full lg:w-1/2">

            <RelatedListings story={story} />

        </div>

      </div>
  );
};

export default Index;

