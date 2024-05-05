import React from 'react';
import { storyblokEditable } from "@storyblok/react";;
import Heading from "@/components/html_tags/Heading";
import Image from 'next/image';
import Button from "../html_tags/Button";
import RichText from "../../utils/RichText";

const Samples = ({ blok }) => {
    
  return ( 
      <div className={`pt-6 px-6 xl:px-16 3xl:px-0 mx-auto container my-8 md:my-20 duration-500`} {...storyblokEditable(blok)}>
        <div className='flex flex-col lg:flex-row !gap-x-[60px] xl:gap-x-12 gap-y-6'> 
         
            <div className='w-full lg:w-1/2'>
                {blok.title &&
                    <Heading size="h2" underlineAnimation={true} className="max-w-5xl text-center m-[0px] xl:m-auto relative w-fit">                    
                        {blok.title}            
                    </Heading>
                }
                <div className='ml-1 max-w-2xl text-lg pt-3 my-2 sm:my-5 font-roboto font-bold leading-widest text-[#333]'>
                    <RichText content={blok.content}/>
                </div>

                <div className="flex gap-3 my-2 sm:my-5 py-5">
                    {blok.button_1 &&
                        <Button href="#" className="max-w-fit" color="green">
                            Book now
                        </Button>
                    }
                    {blok.button_2 &&
                        <Button href="#" className="max-w-fit" color="purple">
                            Volunteer now
                        </Button>  
                    }             
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <div className='relative overflow-hidden'>
                    {blok.image &&
                        <Image
                            src={blok.image.filename}
                            alt={blok.image.alt}
                            width={750}
                            height={537}
                            className="w-full object-cover !max-h-[800px]"
                            priority={true}
                        /> 
                    }
                    <div className="bg-[#76b375] opacity-30 absolute top-0 left-0 z-10 w-full h-full pointer-events-none" />
                </div>
            </div>

        </div>
      </div>
  );
};

export default Samples;
