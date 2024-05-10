import React from 'react';
import { storyblokEditable } from "@storyblok/react";;
import Heading from "@/components/html_tags/Heading";
import RichText from "../../utils/RichText";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


const FullWidthSlider = ({ blok }) => {
    
  return ( 
      <div className={`mx-auto`} {...storyblokEditable(blok)}>

        <div className='relative overflow-hidden ' />
        
        <RichText>
          {blok.title}
        </RichText>

        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={1000}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="relative parallax-slider h-[400px] md:h-[90vh]
          z-20  mt-[-10px] pt-[10px]"
        >
          <div
            slot="container-start"
            className="parallax-bg h-[400px] md:h-[700px]"
            style={{
              'backgroundImage':
                'url(/naples-vesuvio-eco-camp.jpg)',
            }}
            data-swiper-parallax="-23%"
          >
            <div className="bg-[#b37576] opacity-70 absolute top-0 left-0 z-10 w-full h-full pointer-events-none" />
          </div>
          {blok.slides.map(( slide, index ) => (
            <SwiperSlide key={index}>
              <div className='px-6 sm:px-0 flex flex-row items-center h-full w-full'>
                <div className='container m-auto w-full'>
                    <Heading size="h1" underlineAnimation={true} hideUnderlineOnMobile={true} className="max-w-5xl text-center m-auto relative w-fit !text-[#f1f1f1] md:!text-[120px] !mb-0 [&_div]:max-w-[101%] [&_div]:bottom-[-2px]">
                        <div className='opacity-90'>
                          {slide.title}
                        </div>                 
                    </Heading>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="px-0 sm:px-6 mx-auto text-center swiper-pagination flex flex-row w-full"></div>
        </Swiper>

      </div>
  );
};

export default FullWidthSlider;
