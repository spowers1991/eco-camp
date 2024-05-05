import React from 'react';
import Image from 'next/image';

const FeaturedImage = ({ story }) => {
    return (
        story?.content?.image &&
            <Image
                src={story?.content?.image?.filename}
                alt={story?.content?.image?.alt}
                width={750}
                height={537}
                className="w-full object-cover !max-h-[800px] ml-auto"
                priority={true}
            />      
    );
};

export default FeaturedImage;