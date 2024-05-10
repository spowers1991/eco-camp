import React, { useState, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react";;
import Heading from "@/components/html_tags/Heading";
import Image from 'next/image';
import GetAllStories from '../../utils/GetAllStories';
import Link from 'next/link';
import resolveLink from '../../utils/ResolveLink';

const PostsGrid = ({ blok }) => {
    
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const stories = await GetAllStories('accomodation');
            setStories(stories);
          } catch (error) {
            console.error('Error fetching stories:', error);
          }
        };
    
        fetchData();

        return () => {
        };
      }, []); 

    
  return ( 
      <div className={`pt-6 px-6 xl:px-16 3xl:px-0 mx-auto container my-8 md:my-20 duration-500`} {...storyblokEditable(blok)}>
        <Heading size="h2" underlineAnimation={true} className="max-w-5xl relative w-fit">
            Accomodation
        </Heading>
        <div className='grid grid-cols-2 gap-6 mt-9'>
            {stories && stories.map((story, index) => (
                <Link href={resolveLink('/'+story.full_slug)}  key={index} className='relative'>
                    <Image
                        src={story?.content?.image?.filename}
                        alt={story?.content?.image?.alt}
                        width={750}
                        height={537}
                        className="w-full object-cover !max-h-[800px] ml-auto"
                        priority={true}
                    /> 
                    <Heading size="h4" className="absolute bottom-6 left-6 !mb-0">
                        {story.name}
                    </Heading>
                </Link>
            ))}
        </div>

      </div>
  );
};

export default PostsGrid;
